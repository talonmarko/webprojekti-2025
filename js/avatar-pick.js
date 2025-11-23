// Avatar-kuvien valinta
const avatarBtns = document.querySelectorAll('.avatar-icon')

avatarBtns.forEach(btn => btn.addEventListener('click', () => console.log('click', btn)))

// Käyttäjänimen vaihtaminen 
const usernameForm = document.getElementById('username-form')
const usernameInput = document.getElementById('username-form').children[1].children[0]
const username = localStorage.getItem('username')
const confirmationMsg = document.getElementById('confirmation-msg')

const checkForUsername = () => {
    usernameForm.addEventListener('submit', setUserName)
}

const setUserName = (e) => {
    e.preventDefault()
    const formData = new FormData(usernameForm)
    const newUsername = formData.get('username')

    localStorage.setItem('username', newUsername)
    usernameInput.value = ''

    confirmationMsg.textContent = `Vaihtaminen onnistui! Uusi nimimerkkisi on: ${newUsername}`
}

checkForUsername()