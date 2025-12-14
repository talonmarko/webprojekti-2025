
function addPoints(points) {
  localStorage.setItem(
    "game1",
    (Number(localStorage.getItem("game1")) || 0) + points
  );
}

// Game Levels 
const levels = [
    {
    question: "Valitse alueet jotka ovat osa Kreikkaa",
   
    images: [
      { src: "./img/cGame1-1.png", answer: false },
      { src: "./img/cGame1-2.png", answer: true },
      { src: "./img/cGame1-3.png", answer: true },
      { src: "./img/cGame1-4.png", answer: false },
      { src: "./img/cGame1-5.png", answer: true },
      { src: "./img/cGame1-6.png", answer: true },
      { src: "./img/cGame1-7.png", answer: false },
      { src: "./img/cGame1-8.png", answer: true },
      { src: "./img/cGame1-9.png", answer: true }
    ]
    },
    {
     question: "Valitse alueet jotka ovat osa Indonesiaa",
     images: [
      { src: "./img/cGame2-1.png", answer: false },
      { src: "./img/cGame2-2.png", answer: false },
      { src: "./img/cGame2-3.png", answer: false },
      { src: "./img/cGame2-4.png", answer: false },
      { src: "./img/cGame2-5.png", answer: true },
      { src: "./img/cGame2-6.png", answer: true },
      { src: "./img/cGame2-7.png", answer: true },
      { src: "./img/cGame2-8.png", answer: true },
      { src: "./img/cGame2-9.png", answer: true }
    ]
    },
    {
    question: "löytyykö Bolivia kartalta?",   
     images: [
      { src: "./img/cGame3-1.png", answer: true },
      { src: "./img/cGame3-2.png", answer: true },
      { src: "./img/cGame3-3.png", answer: false },
      { src: "./img/cGame3-4.png", answer: true },
      { src: "./img/cGame3-5.png", answer: true },
      { src: "./img/cGame3-6.png", answer: false },
      { src: "./img/cGame3-7.png", answer: false },
      { src: "./img/cGame3-8.png", answer: false },
      { src: "./img/cGame3-9.png", answer: false }
    ]
    },
    {
    question: "Missä Kongon demokraattinen tasavalta sijaitsee kartalla?",   
     images: [
      { src: "./img/cGame4-1.png", answer: false },
      { src: "./img/cGame4-2.png", answer: false },
      { src: "./img/cGame4-3.png", answer: false },
      { src: "./img/cGame4-4.png", answer: false },
      { src: "./img/cGame4-5.png", answer: false },
      { src: "./img/cGame4-6.png", answer: true },
      { src: "./img/cGame4-7.png", answer: false },
      { src: "./img/cGame4-8.png", answer: true },
      { src: "./img/cGame4-9.png", answer: true }
    ]
    },
    {
    question: "Osoitatko vielä Sri Lankan sijannin",   
     images: [
      { src: "./img/cGame5-1.png", answer: false },
      { src: "./img/cGame5-2.png", answer: false },
      { src: "./img/cGame5-3.png", answer: false },
      { src: "./img/cGame5-4.png", answer: false },
      { src: "./img/cGame5-5.png", answer: false },
      { src: "./img/cGame5-6.png", answer: false },
      { src: "./img/cGame5-7.png", answer: false },
      { src: "./img/cGame5-8.png", answer: true },
      { src: "./img/cGame5-9.png", answer: false }
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

    awaitingContinue = false;
  submitbtn.textContent = "Tarkista";
  resultBox.textContent = "";

  question.textContent = level.question;
  grid.innerHTML = "";

  // Create the images
  level.images.forEach((imgObj, idx) => {
      const img = document.createElement("img");
    img.src = imgObj.src;
    img.dataset.index = idx;
    img.classList.add("captcha-img");

    img.addEventListener("click", () => {
      img.classList.toggle("selected");
    });

    grid.appendChild(img);
  });
}

function checkLevel() {
  // Continue button logic
  if (awaitingContinue) {
    awaitingContinue = false;
    submitbtn.textContent = "Tarkista";
    nextLevel();
    return;
  }

  const level = levels[currentLevel];
  const allImages = Array.from(
    grid.querySelectorAll(".captcha-img")
  );

  const selectedIndexes = allImages
    .filter(img => img.classList.contains("selected"))
    .map(img => Number(img.dataset.index));

  const correctIndexes = level.images
    .map((img, i) => (img.answer ? i : null))
    .filter(i => i !== null);

  const correctSelected = selectedIndexes.filter(i =>
    correctIndexes.includes(i)
  );

  const wrongSelected = selectedIndexes.filter(i =>
    !correctIndexes.includes(i)
  );

  let points = 0;
  let message = "";
  let color = "";

  // Give scores based on answers
  if (
    correctSelected.length === correctIndexes.length &&
    wrongSelected.length === 0
  ) {
    points = 2;
    message = "✔️ Aivan oikein! 2 pistettä";
    color = "lime";
  } else if (correctSelected.length > 0) {
    points = 1;
    message = " melkein oikein! 1 piste";
    color = "gold";
  } else {
    points = 0;
    message = "❌ Valitettavasti väärin. Ei pisteitä";
    color = "red";
  }

  addPoints(points);

  // Show result text
  resultBox.textContent = message;
  resultBox.style.color = color;

  // Reveal correct answers
  allImages.forEach((img, idx) => {
    const isCorrect = level.images[idx].answer;
    const isSelected = img.classList.contains("selected");

    if (isCorrect) {
      img.classList.add("correct");
    } else if (isSelected && !isCorrect) {
      img.classList.add("wrong");
    }

    img.style.pointerEvents = "none";
  });

  awaitingContinue = true;
  submitbtn.textContent = "Jatka";
}

function nextLevel() {
  currentLevel++;

  if (currentLevel < levels.length) {
    loadLevel(currentLevel);
  } else {
    finishGame();
  }
}

function finishGame() {
  resultBox.textContent = "🎉 Kaikki tasot suoritettu!";
  resultBox.style.color = "lime";
  submitbtn.disabled = true;
}


submitbtn.addEventListener("click", checkLevel);
loadLevel(currentLevel);