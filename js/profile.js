// Avatar-kuvan näyttäminen oikein
const avatar = document.getElementById('avatar')
const avatarURL = localStorage.getItem('avatar')
const avatarBgColor = localStorage.getItem('background-color')

const showAvatarImg = () => {
    if (avatarURL && avatarBgColor) {
        avatar.children[0].src = avatarURL
        avatar.style.backgroundColor = avatarBgColor
    }
}

showAvatarImg()

// Avatar-kuvan valinta ja muokkaus
const avatarSlides = document.querySelectorAll('.avatar-slide')
const avatarBtns = document.querySelectorAll('.avatar-icon')
const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')
const colorPicker = document.getElementById('color-picker')
const colorOptions = document.querySelectorAll('.bg-picker')
const saveAvatarBtn = document.getElementById('save-avatar')
const resetAvatarBtn = document.getElementById('reset-avatar')

let slideIndex = 0

// Selaa avatar-kuvia vasemmalle
leftBtn.addEventListener('click', () => {
    const left = 'left'
    changeSlide(left)
})

// Selaa avatar-kuvia oikealle
rightBtn.addEventListener('click', () => {
    const right = 'right'
    changeSlide(right)
})

// Muuttaa taustan värinvalitsimen väriseksi
const watchColorPicker = (e) => {
    avatarSlides.forEach(slide => {
        slide.style.backgroundColor = e.target.value
    })
}

colorPicker.addEventListener('input', watchColorPicker)

// Muuntaa rgb-arvoisen värin HEX-väriksi
const rgbToHex = (rgb) => {
    const result = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
    if (!result) {
        return null
    }

    let r = parseInt(result[1], 10)
    let g = parseInt(result[2], 10)
    let b = parseInt(result[3], 10)

    const toHex = (c) => {
        const hex = c.toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }

    return '#' + toHex(r) + toHex(g) + toHex(b)
}

// Vaihtaa värinvalitsimen väriä taustan värin mukaiseksi
const setColorPicker = () => {
    let bgColor = ''
    avatarSlides.forEach(slide => {
        const computedStyles = window.getComputedStyle(slide)
        bgColor = computedStyles.backgroundColor
    })

    bgColor = rgbToHex(bgColor)
    colorPicker.value = bgColor
    return bgColor
}

// Tekee toiminnallisuuden ennalta määritellyille väripainikkeille
const useColorOptions = () => {
    colorOptions.forEach(option => option.addEventListener('click', () => {
        const computedStyles = window.getComputedStyle(option)
        const bgColor = computedStyles.backgroundColor

        avatarSlides.forEach(slide => {
            slide.style.backgroundColor = bgColor
            setColorPicker()
        })
    }))

    if (avatarBgColor) {
        avatarSlides.forEach(slide => {
            slide.style.backgroundColor = avatarBgColor
        })
    }
}

// Vaihtaa avatar-kuvaosiota suunnan mukaisesti
const changeSlide = (direction) => {
    if (direction === 'left') {
        if (slideIndex === 0) {
            slideIndex = avatarSlides.length - 1
            showSlide(slideIndex)
        } else {
            slideIndex -= 1
            showSlide(slideIndex)
        }
    } else {
        if (slideIndex === avatarSlides.length - 1) {
            slideIndex = 0
            showSlide(slideIndex)
        } else {
            slideIndex += 1
            showSlide(slideIndex)
        }
    }
}

const setSlideIndex = () => {
    if (avatarURL) {
        avatarSlides.forEach((slide, index) => {
            const slideURL = slide.children[0].src
            if (slideURL === avatarURL) {
                slide.style.display = 'block'
                slideIndex = index
            } else {
                slide.style.display = 'none'
            }
        })
    } else {
        slideIndex = 0
        showSlide(slideIndex)
    }
}

// Näyttää oikean kuvan, kun sivulle saavutaan
const showSlide = (slideIndex) => {
    avatarSlides.forEach((slide, index) => {
        if (slideIndex === index) {
            slide.style.display = 'block'
        } else {
            slide.style.display = 'none'
        }
    })
}

const saveAvatarSettings = () => {
    saveAvatarBtn.addEventListener('click', () => {
        avatarSlides.forEach((slide, index) => {
            if (slideIndex === index) {
                const imgSrc = slide.children[0].src
                localStorage.setItem('avatar', imgSrc)
            }
        })

        const bgColor = setColorPicker()
        localStorage.setItem('background-color', bgColor)
        showAvatarImg()
        location.reload()
    })
    //teeppäs tämä
    // resetAvatarBtn.addEventListener('click')
}

saveAvatarSettings()
setSlideIndex()
setColorPicker()
useColorOptions()

// Käyttäjänimen vaihtaminen 
const userDetails = document.getElementById('user-details')
const usernameForm = document.getElementById('username-form')
const usernameInput = document.getElementById('username-form').children[1].children[0]
const username = localStorage.getItem('username')
const forgetUserSection = document.getElementById('forget-user-section')
const forgetUserBtn = document.getElementById('forget-user-btn')
const confirmationMsg = document.getElementById('confirmation-msg')
const welcomeMsg = document.getElementById('welcome-msg')

const checkForUsernameAtProfile = () => {
    if (username) {
        userDetails.style.display = 'block'
        welcomeMsg.textContent = `Comment ça va, ${username}?`
    } else {
        userDetails.style.display = 'none'
    }
    usernameForm.addEventListener('submit', setNewUserName)
}

const setNewUserName = (e) => {
    e.preventDefault()
    const formData = new FormData(usernameForm)
    const newUsername = formData.get('username')

    localStorage.setItem('username', newUsername)
    usernameInput.value = ''

    confirmationMsg.textContent = `Vaihtaminen onnistui! Uusi nimimerkkisi on: ${newUsername}`
    welcomeMsg.textContent = `Do you feel bonita, ${newUsername}?`
}

const forgetUser = () => {
    const p = document.createElement('p')
    const acceptBtn = document.createElement('button')
    const cancelBtn = document.createElement('button')
    acceptBtn.classList.add('green-btn')
    cancelBtn.classList.add('text-btn')
    p.textContent = 'Hyväksymällä poistat nimimerkkisi, avatarisi ja pistesaldosi, eikä niitä voi palauttaa. Oletko varma?'
    acceptBtn.textContent = 'Hyväksy'
    cancelBtn.textContent = 'Peruuta'

    forgetUserBtn.addEventListener('click', () => {
        forgetUserSection.append(p)
        forgetUserSection.append(acceptBtn)
        forgetUserSection.append(cancelBtn)
        forgetUserBtn.style.display = 'none'
    })

    acceptBtn.addEventListener('click', () => {
        localStorage.removeItem('username')
        localStorage.removeItem('avatar')
        localStorage.removeItem('background-color')
        p.remove()
        acceptBtn.remove()
        cancelBtn.remove()
        userDetails.style.display = 'none'
    })

    cancelBtn.addEventListener('click', () => {
        forgetUserBtn.style.display = 'inline-block'
        p.remove()
        acceptBtn.remove()
        cancelBtn.remove()
    })
}

forgetUser()
checkForUsernameAtProfile()

// SCOREBOARD
const GAME_KEYS = ["game1", "game2", "game3", "game4", "game5"];

function parseScoresSafe() {
    try {
        const raw = localStorage.getItem("scores");
        if (!raw) return null;
        const parsed = JSON.parse(raw);

        if (typeof parsed !== "object" || parsed === null) return null;

        const out = {};
        GAME_KEYS.forEach(k => out[k] = Number(parsed[k] || 0));
        out.total = Number(parsed.total ?? GAME_KEYS.reduce((sum, k) => sum + out[k], 0));
        return out;
    } catch {
        console.warn("Invalid scores in localStorage");
        return null;
    }
}

function initScoreboard() {
    if (!localStorage.getItem("scores")) {
        const defaultScores = Object.fromEntries(GAME_KEYS.map(k => [k, 0]));
        defaultScores.total = 0;
        localStorage.setItem("scores", JSON.stringify(defaultScores));
    }
}

function updateTotal(scores) {
    scores.total = GAME_KEYS.reduce((sum, k) => sum + (scores[k] || 0), 0);
    localStorage.setItem("scores", JSON.stringify(scores));
}

function loadScores() {
    const scoreboard = document.querySelector(".scoreboard");
    if (!scoreboard) return;

    const scores = parseScoresSafe() || GAME_KEYS.reduce((acc, k) => (acc[k] = 0, acc), { total: 0 });

    const rows = scoreboard.querySelectorAll(".score-row");
    GAME_KEYS.forEach((key, i) => {
        const el = rows[i]?.querySelector("span:last-child");
        if (el) el.textContent = scores[key];
    });

    const totalEl = scoreboard.querySelector(".score-total span:last-child");
    if (totalEl) totalEl.textContent = scores.total;
}

function addPoints(gameNumber, points) {
    const scores = parseScoresSafe() || Object.fromEntries(GAME_KEYS.map(k => [k, 0]));
    const key = `game${gameNumber}`;
    scores[key] = (scores[key] || 0) + Number(points || 0);
    updateTotal(scores);
    loadScores();
}

function runScoreboard() {
    initScoreboard();
    loadScores();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        runScoreboard();
    });
} else {
    runScoreboard();
}

// when localstorage changes in another tab!!
window.addEventListener('storage', e => {
    if (e.key === 'scores') loadScores();
});

window.addEventListener('pageshow', runScoreboard);