
function addPoints(points) {
  localStorage.setItem(
    "game1",
    (Number(localStorage.getItem("game1")) || 0) + points
  );
}


const levels = [
  {
    question: "Valitse alueet jotka ovat osa Kreikkaa",
    background: "./img/cGame1.png",
    images: [
      { answer: true },
      { answer: false },
      { answer: true },
      { answer: false },
      { answer: true },
      { answer: false },
      { answer: false },
      { answer: true },
      { answer: false }
    ]
  }
];


const question = document.getElementById("Questions");
const grid     = document.getElementById("Picgrid");
const resultBox = document.getElementById("Result");
const submitbtn = document.getElementById("Submitbtn");

let currentLevel = 0;


function loadLevel(levelIndex) {
  const level = levels[levelIndex];
  resultBox.textContent = "";

  question.textContent = level.question;

  
  grid.innerHTML = "";

  // Set background image
  grid.style.backgroundImage = `url("${level.background}")`;
  grid.style.backgroundSize = "cover";
  grid.style.backgroundPosition = "center";

  // Create transparent clickable cells
  level.images.forEach((cellObj, idx) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = idx;

    cell.addEventListener("click", () => {
      cell.classList.toggle("selected");
    });

    grid.appendChild(cell);
  });
}


function checkLevel() {
  const level = levels[currentLevel];

  const selected = Array.from(grid.querySelectorAll(".cell.selected"))
    .map(cell => Number(cell.dataset.index));

  const correct = level.images
    .map((c, i) => (c.answer ? i : null))
    .filter(x => x !== null);

  const isCorrect =
    selected.length === correct.length &&
    selected.every(idx => correct.includes(idx));

  if (isCorrect) {
    resultBox.textContent = "✔️ Correct!";
    resultBox.style.color = "green";

    // Give points (you decide how many)
    addPoints(10);

    setTimeout(() => {
      currentLevel++;

      if (currentLevel < levels.length) {
        loadLevel(currentLevel);
      } else {
        finishGame();
      }
    }, 1000);

  } else {
    resultBox.textContent = "❌ Incorrect — try again!";
    resultBox.style.color = "red";
  }
}

function finishGame() {
  resultBox.textContent = "🎉 Kaikki tasot suoritettu!";
  resultBox.style.color = "lime";
  submitbtn.disabled = true;
}


submitbtn.addEventListener("click", checkLevel);
loadLevel(currentLevel);