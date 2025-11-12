// Käyttäjänimen asettaminen 
const usernameContainer = document.getElementById('username-container')
const username = localStorage.getItem('username')
const welcomeMsg = document.getElementById('welcome-msg')

const checkForUsername = () => {
    if (username === null) {
        usernameContainer.style.display = 'block'
        const usernameForm = document.getElementById('username')
        usernameForm.addEventListener('submit', setUserName)
    }
    if (username != null) {
        welcomeMsg.textContent = `Tervetuloa pelaamaan, ${username}!`
    }
}

const setUserName = (e) => {
    e.preventDefault()
    const usernameForm = document.getElementById('username')
    const formData = new FormData(usernameForm)
    const newUsername = formData.get('username')
    console.log(newUsername)
    localStorage.setItem('username', newUsername)
    welcomeMsg.textContent = `Tervetuloa pelaamaan, ${newUsername}!`
    usernameContainer.style.display = 'none'
}

console.log(username)
checkForUsername()