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

// localstorage for scoreboard 

  function initScoreboard() {
    if (!localStorage.getItem("scores")) {
      const defaultScores = {
        game1: 0,
        game2: 0,
        game3: 0,
        game4: 0,
        game5: 0,
        total: 0
      };
      localStorage.setItem("scores", JSON.stringify(defaultScores));
    }
  }

   // load score from localstorage 
     function loadScores() {
     const scores = JSON.parse(localStorage.getItem("scores"));

     const rows = document.querySelectorAll(".score-row");
     const keys = ["game1", "game2", "game3", "game4", "game5"];

     keys.forEach((key, i) => {
      const valueSpan = rows[i].querySelector("span:last-child");
      valueSpan.textContent = scores[key];
     });

    document.querySelector(".score-total span:last-child").textContent = scores.total;
  }

   // update score total
     function updateTotal() {
     const scores = JSON.parse(localStorage.getItem("scores"));
      scores.total =
      scores.game1 +
      scores.game2 +
      scores.game3 +
      scores.game4 +
      scores.game5;

      localStorage.setItem("scores", JSON.stringify(scores));
      }

  // public function for games
     function addPoints(gameNumber, points) {
     const scores = JSON.parse(localStorage.getItem("scores"));
     scores[`game${gameNumber}`] += points;
     localStorage.setItem("scores", JSON.stringify(scores));
     updateTotal();
     loadScores();
     }

  // load score when page loads
     initScoreboard();
     loadScores();