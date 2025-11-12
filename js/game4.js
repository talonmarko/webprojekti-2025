const username = localStorage.getItem('username')
const welcomeMsg = document.getElementById('welcome-msg')

const checkForUsername = () => {
    if (username != null) {
        welcomeMsg.textContent = `Tervetuloa pelaamaan, ${username}!`
    }
}

checkForUsername()