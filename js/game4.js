const flagsContainer = document.getElementById('flags')
const countryNamesContainer = document.getElementById('country-names')
const countryCodes = []
const countryNames = []
const visibleCountriesAmount = 6
const shuffledIndexes = []
let score = 0
let allFlagsAreMatched = false

const getData = async () => {
    const URL = 'https://flagcdn.com/fi/codes.json'
    const proxyURL = 'https://corsproxy.io/?'
    const joinedURL = proxyURL + encodeURIComponent(URL)

    try {
        const response = await fetch(joinedURL)

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const result = await response.json()
        Object.keys(result).forEach(key => countryCodes.push(key))
        Object.values(result).forEach(value => countryNames.push(value))

        const countriesAmount = countryCodes.length
        const indexes = Array.from({ length: countriesAmount }, (_, i) => i) // Luo listan [0, 1, 2, ... , 305]
        shuffledIndexes.push(...shuffleArray(indexes))

        createFlags()

        return result
    } catch (error) {
        console.error(error.message)
    }
}

// Sekoittaa maiden järjestysluvut / indeksit
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

// Luo pelipainikkeet
const createFlags = () => {
    const names = countryNames
    const codes = countryCodes
    let currentIndexes = []

    flagsContainer.replaceChildren()
    countryNamesContainer.replaceChildren()

    // Liput
    for (let i = 0; i < visibleCountriesAmount; i++) {
        const index = shuffledIndexes[i + score]
        const flagBtn = document.createElement('button')
        const flagImg = document.createElement('img')

        flagImg.src = 'https://flagcdn.com/h40/' + codes[index] + '.png'
        flagImg.alt = names[index]
        flagBtn.classList.add('game-btn', 'flag')
        flagBtn.append(flagImg)
        flagsContainer.append(flagBtn)

        currentIndexes.push(index)
    }

    // Maiden nimet eri järjestykseen
    currentIndexes = shuffleArray(currentIndexes)

    for (let i = 0; i < visibleCountriesAmount; i++) {
        const index = currentIndexes[i]
        const countryBtn = document.createElement('button')

        countryBtn.classList.add('game-btn', 'country')
        countryBtn.textContent = names[index]
        countryNamesContainer.append(countryBtn)
    }

    currentIndexes = []

    clickGameButtons()
}

const username = localStorage.getItem('username')
const welcomeMsg = document.getElementById('welcome-msg')
const gameScore = document.getElementById('game-score')
const gameBtns = document.querySelectorAll('.game-btn')

let currentMatches = 0
let activeFlag = ''
let activeCountry = ''

const checkForUsername = () => {
    if (username != null) {
        welcomeMsg.textContent = `Tervetuloa pelaamaan, ${username}!`
    }
}

const checkForMatch = (flag, country) => {
    const flagBtns = document.querySelectorAll('.flag')
    flagBtns.forEach(f => f.classList.remove('no-match'))

    const countryBtns = document.querySelectorAll('.country')
    countryBtns.forEach(c => c.classList.remove('no-match'))

    if (flag != '' && country != '') {
        if (flag === country) {
            flagBtns.forEach(f => {
                if (f.children[0].alt === flag) {
                    f.classList.add('matched')
                    f.classList.remove('active')
                }
            })

            countryBtns.forEach(c => {
                if (c.textContent === country) {
                    c.classList.add('matched')
                    c.classList.remove('active')
                }
            })

            gameScore.textContent = ++score
            ++currentMatches
            activeFlag = ''
            activeCountry = ''
        } else if (flag != '' && country != '') {
            flagBtns.forEach(f => {
                if (f.children[0].alt === flag) {
                    f.classList.add('no-match')
                    f.classList.remove('active-btn')
                }
            })

            countryBtns.forEach(c => {
                if (c.textContent === country) {
                    c.classList.add('no-match')
                    c.classList.remove('active-btn')
                }
            })

            activeFlag = ''
            activeCountry = ''
        }
    }
    if (currentMatches === visibleCountriesAmount && score < shuffledIndexes.length) {
        setTimeout(() => {
            flagsContainer.replaceChildren()
            countryNamesContainer.replaceChildren()
            createFlags()
            currentMatches = 0
        }, 1200)
    }
}

const clickGameButtons = () => {
    const flagBtns = document.querySelectorAll('.flag')
    flagBtns.forEach((flag, index) => flag.addEventListener('click', () => {
        if (!flag.classList.contains('matched')) {
            if (flag.classList.contains('active-btn')) {
                flag.classList.remove('active-btn')
                activeFlag = ''
            } else {
                flag.classList.add('active-btn')
                activeFlag = flag.children[0].alt
                console.log(activeFlag)

                for (i = 0; i < flagBtns.length; i++) {
                    if (i != index) {
                        flagBtns[i].classList.remove('active-btn')
                    }
                }

                checkForMatch(activeFlag, activeCountry)
            }
        }
    }))

    const countryBtns = document.querySelectorAll('.country')
    countryBtns.forEach((country, index) => country.addEventListener('click', () => {
        if (!country.classList.contains('matched')) {
            if (country.classList.contains('active-btn')) {
                country.classList.remove('active-btn')
                activeCountry = ''
            } else {
                country.classList.add('active-btn')
                activeCountry = country.textContent
                for (i = 0; i < countryBtns.length; i++) {
                    if (i != index) {
                        countryBtns[i].classList.remove('active-btn')
                    }
                }

                checkForMatch(activeFlag, activeCountry)
            }
        }
    }))

    const stopGameBtn = document.getElementById('stop-game')
    const newGameBtn = document.getElementById('new-game')
    const scoreContainer = document.getElementById('game-score-container')
    const gameOverlay = document.querySelector('.game-container-overlay')

    newGameBtn.addEventListener('click', () => {
        window.location.reload()
        scoreContainer.classList.remove('centered-score')
        gameOverlay.style.display = 'none'
        newGameBtn.style.display = 'none'
    })

    stopGameBtn.addEventListener('click', () => {
        scoreContainer.classList.add('centered-score')
        gameOverlay.style.display = 'block'
        newGameBtn.style.display = 'block'
    })
}

checkForUsername()
getData()

// for scoreboard
localStorage.setItem('game4', (Number(localStorage.getItem('game4')) || 0) + points);
