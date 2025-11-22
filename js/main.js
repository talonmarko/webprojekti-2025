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
    console.log(newUsername)
    localStorage.setItem('username', newUsername)
    welcomeMsg.textContent = `Tervetuloa pelaamaan, ${newUsername}!`
    userInfoContainer.style.display = 'flex'
    userCreationContainer.style.display = 'none'
}

console.log(username)
checkForUsername()