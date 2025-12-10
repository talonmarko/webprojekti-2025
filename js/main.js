// Käyttäjänimen asettaminen 
const userCreationContainer = document.getElementById('user-creation-container')
const userInfoContainer = document.getElementById('user-info-container')
const username = localStorage.getItem('username')
const welcomeMsg = document.getElementById('welcome-msg')

const checkForUsername = () => {
    if (!welcomeMsg || !userCreationContainer || !userInfoContainer) return

    if (username) {
        welcomeMsg.textContent = `Tervetuloa pelaamaan, ${username}!`
        userInfoContainer.style.display = 'flex'
        userCreationContainer.style.display = 'none'
    } else {
        showUsernameInput()
    }
}

const showUsernameInput = () => {
    if (!username) {
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
//Aktiivisen sivun korostaminen
const activePage = () => {
    const currPage = location.pathname.split("/").pop();
    
    document.querySelectorAll("nav a").forEach(page => {
    const href = page.getAttribute("href").replace("./", "");
    if (currPage === "index.html" && href === "index.html") {
        return
    }else {
        if (href === currPage) {
            page.classList.add (
               "border-2", "border-[#1AFF8C]", "hover:bg-black", "hover:text-white"
            )
        }
    }})
    
}

//Hampurilaisvalikon avaaminen ja sulkeminen

const hamburgerMenu = () => {
    const hamButton = document.getElementById("hamburger-button")
    const hamMenu = document.getElementById("hamburger-menu")

    hamButton.addEventListener("click", () => {
        hamMenu.classList.toggle("hidden")
    })

    window.addEventListener("resize", () => {
        if(window.innerWidth >= 1090) {
            hamMenu.classList.add("hidden")
        }
    })
}

hamburgerMenu()

activePage()

showAvatarImg()

checkForUsername()
