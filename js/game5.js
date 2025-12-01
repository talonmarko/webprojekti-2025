// for scoreboard
let index = 0;
let points = 0;

let answers = [
    ['C++','JS','Kotlin'],
    ['Hoover','Apple', 'Fender']
];

let correctAnswers = ['b','c'];

let result = document.querySelector('#result');
let question = document.querySelector('#question');
let form = document.querySelector('form');
form.addEventListener('submit', answer);

//Asetetaan ensimmäinen kysymys
setQuestion();

//Vastauksen käsittely
function answer(e){
    e.preventDefault();
    
    document.querySelector('button').disabled = true;

    //Haetaan pelaajan vastaus
    let fData = new FormData(form);
    let a = fData.get('answer');

    //Onko vastaus oikea.
    if(correctAnswers[index] == a){
        points++;
        question.classList.add('correct');
    }else{
         question.classList.add('incorrect');
    }

    //Näytetään kokonaistulos
    result.textContent = 
        'Sinulla on pisteitä ' + points + '/'+answers.length;

    //Päivitetään seuraavan kysymyksen id.
    index++;

    //Näytetään seuraava kysymys 4sek viiveellä.
    setTimeout(setQuestion, 4000);
}

//Kysymyksen asettaminen
function setQuestion(){
    //Poistetaan edellisen vastauksen muotoilut.
    question.classList.remove('correct','incorrect');

    //Tarkistetaan loppuivatko kysymykset.
    //Jos loppuivat, piilotetaan lomake.
    if(index > questions.length-1){
        form.classList.add('hidden');
        result.textContent = 
              'Peli päättyi. Sait ' + points + '/'+ answers.length + ' pistettä.';
        localStorage.setItem('game5', (Number(localStorage.getItem('game5')) || 0) + points);
        
    }else{
        question.textContent = questions[index];
        let labels = document.querySelectorAll('label');
        labels[0].textContent = answers[index][0]; 
        labels[1].textContent = answers[index][1]; 
        labels[2].textContent = answers[index][2]; 
       
    }
    document.querySelector('button').disabled = false;
}

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
        const modal = document.getElementById("quizModal");
        const q = questions[id];

        document.getElementById("questionTitle").innerText = q.question;

        // Display answer choices
        const choicesDiv = document.getElementById("choices");
        choicesDiv.innerHTML = "";
        q.answers.forEach(a => {
            const btn = document.createElement("button");
            btn.innerText = a;
            btn.style.display = "block";
            btn.style.margin = "5px auto";
            choicesDiv.appendChild(btn);
        });

        modal.style.display = "flex";
    }

    function closeModal() {
        document.getElementById("quizModal").style.display = "none";
    }