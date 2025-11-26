// Käyttäjänimen asettaminen 
const userCreationContainer = document.getElementById('user-creation-container')
const userInfoContainer = document.getElementById('user-info-container')
const username = localStorage.getItem('username')
const welcomeMsg = document.getElementById('welcome-msg')

const checkForUsername = () => {
    if (username != null) {
        welcomeMsg.textContent = `Tervetuloa pelaamaan, ${username}!`
        userInfoContainer.style.display = 'flex'
        userCreationContainer.style.display = 'none'
    } else {
        showUsernameInput()
    }
}

const showUsernameInput = () => {
    if (username === null) {
        const usernameForm = document.getElementById('username-form')
        usernameForm.addEventListener('submit', setUserName)
        userCreationContainer.style.display = 'flex'
        userInfoContainer.style.display = 'none'
    }
}

const setUserName = (e) => {
    e.preventDefault()
    const usernameForm = document.getElementById('username-form')
    const formData = new FormData(usernameForm)
    const newUsername = formData.get('username')
    
    localStorage.setItem('username', newUsername)
    
    welcomeMsg.textContent = `Tervetuloa pelaamaan, ${newUsername}!`
    userInfoContainer.style.display = 'flex'
    userCreationContainer.style.display = 'none'
}

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
checkForUsername()