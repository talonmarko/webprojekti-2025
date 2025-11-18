const username = localStorage.getItem('username')
const welcomeMsg = document.getElementById('welcome-msg')

const gameScore = document.getElementById('game-score')
const gameBtns = document.querySelectorAll('.game-btn')
const flags = document.querySelectorAll('.flag')
const countries = document.querySelectorAll('.country')

let score = 0

let activeFlag = ""
let activeCountry = ""

const checkForUsername = () => {
    if (username != null) {
        welcomeMsg.textContent = `Tervetuloa pelaamaan, ${username}!`
    }
}

const checkForMatch = (flag, country) => {
    flags.forEach(f => f.classList.remove('no-match'))
    countries.forEach(c => c.classList.remove('no-match'))
    
    if (flag != "" && country != "") {
        if (flag === country) {
            flags.forEach(f => {
                if (f.textContent === flag) {
                    f.classList.add('matched')
                    f.classList.remove('active')
                }
            })

            countries.forEach(c => {
                if (c.textContent === country) {
                    c.classList.add('matched')
                    c.classList.remove('active')
                }
            })

            gameScore.textContent = ++score
            activeFlag = ""
            activeCountry = ""
        } else if (flag != "" && country != "") {
            flags.forEach(f => {
                if (f.textContent === flag) {
                    f.classList.add('no-match')
                    f.classList.remove('active-btn')
                }
            })

            countries.forEach(c => {
                if (c.textContent === country) {
                    c.classList.add('no-match')
                    c.classList.remove('active-btn')
                }
            })

            activeFlag = ""
            activeCountry = ""
        }
    }
}

const clickGameButtons = () => {
    flags.forEach((flag, index) => flag.addEventListener('click', () => {
        if (!flag.classList.contains('matched')) {
            if (flag.classList.contains('active-btn')) {
                flag.classList.remove('active-btn')
                activeFlag = ""
            } else {
                flag.classList.add('active-btn')
                activeFlag = flag.textContent
                console.log(activeFlag)
                for (i = 0; i < flags.length; i++) {
                    if (i != index) {
                        flags[i].classList.remove('active-btn')
                    }
                }

                checkForMatch(activeFlag, activeCountry)
            }
        }
    }))

    countries.forEach((country, index) => country.addEventListener('click', () => {
        if (!country.classList.contains('matched')) {
            if (country.classList.contains('active-btn')) {
                country.classList.remove('active-btn')
                activeCountry = ""
            } else {
                country.classList.add('active-btn')
                activeCountry = country.textContent
                for (i = 0; i < countries.length; i++) {
                    if (i != index) {
                        countries[i].classList.remove('active-btn')
                    }
                }

                checkForMatch(activeFlag, activeCountry)
            }
        }
    }))
}

checkForUsername()
clickGameButtons()