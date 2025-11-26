// Käyttäjänimen asettaminen 
const userCreationContainer = document.getElementById('user-creation-container');
const userInfoContainer = document.getElementById('user-info-container');
const welcomeMsg = document.getElementById('welcome-msg');

const username = localStorage.getItem('username');

function showUsernameInput() {
  const usernameForm = document.getElementById('username-form');
  if (!usernameForm) return;
  usernameForm.addEventListener('submit', setUserName);
  userCreationContainer.style.display = 'flex';
  userInfoContainer.style.display = 'none';
}

function setUserName(e) {
  e.preventDefault();
  const usernameForm = document.getElementById('username-form');
  const newUsername = new FormData(usernameForm).get('username');
  if (!newUsername) return;
  localStorage.setItem('username', newUsername);
  welcomeMsg.textContent = `Tervetuloa pelaamaan, ${newUsername}!`;
  userInfoContainer.style.display = 'flex';
  userCreationContainer.style.display = 'none';
}

function checkForUsername() {
  if (!welcomeMsg || !userCreationContainer || !userInfoContainer) return;

  if (username) {
    welcomeMsg.textContent = `Tervetuloa pelaamaan, ${username}!`;
    userInfoContainer.style.display = 'flex';
    userCreationContainer.style.display = 'none';
  } else {
    showUsernameInput();
  }
}

// SCOREBOARD
const GAME_KEYS = ["game1","game2","game3","game4","game5"];

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

  const scores = parseScoresSafe() || GAME_KEYS.reduce((acc, k) => (acc[k]=0, acc), {total:0});

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