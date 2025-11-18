const username = localStorage.getItem('username')
const welcomeMsg = document.getElementById('welcome-msg')

const gameScore = document.getElementById('game-score')
const gameBtns = document.querySelectorAll('.game-btn')
const flags = document.querySelectorAll('.flag')
const countries = document.querySelectorAll('.country')

let score = 0

const checkForUsername = () => {
    if (username != null) {
        welcomeMsg.textContent = `Tervetuloa pelaamaan, ${username}!`
    }
}

const checkForMatch = (flag, country) => {
    if (flag === country) {
        gameScore.textContent = ++score
        console.log('match')
    } else {
        console.log('no match')
    }
}

const clickGameButtons = () => {
    let activeFlag = "no active flag"
    let activeCountry = "no active country"

    flags.forEach((flag, index) => flag.addEventListener('click', () => {
        if (flag.classList.contains('active')) {
            flag.classList.remove('active')
        } else {
            flag.classList.add('active')
            activeFlag = flag.textContent
            console.log(activeFlag)
            for (i = 0; i < flags.length; i++) {
                if (i != index) {
                    flags[i].classList.remove('active')
                }
            }

            checkForMatch(activeFlag, activeCountry)
        }
    }))

    countries.forEach((country, index) => country.addEventListener('click', () => {
        if (country.classList.contains('active')) {
            country.classList.remove('active')
        } else {
            country.classList.add('active')
            activeCountry = country.textContent
            for (i = 0; i < flags.length; i++) {
                if (i != index) {
                    countries[i].classList.remove('active')
                }
            }

            checkForMatch(activeFlag, activeCountry)
        }
    }))
}

checkForUsername()
clickGameButtons()