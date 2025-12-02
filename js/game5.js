// for scoreboard
let points = 0; 


// modal quiz functionality

    const questions = {
        1: {
            question: "Which continent is this?",
            answers: ["Africa", "Europe", "Asia"],
        },
        2: {
            question: "What ocean is this location closest to?",
            answers: ["Atlantic", "Pacific", "Indian"],
        },
        3: {
            question: "What country is here?",
            answers: ["USA", "Canada", "Mexico"],
        }
    };

  function openQuestion(id) {
    const modal = new bootstrap.Modal(document.getElementById("quizModal"));
    const q = questions[id];

    document.getElementById("questionTitle").innerText = q.question;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    q.answers.forEach(a => {
        const btn = document.createElement("button");
        btn.className = "btn btn-primary w-100 my-1";
        btn.innerText = a;
        choicesDiv.appendChild(btn);
    });

    modal.show();
}