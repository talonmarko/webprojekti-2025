// for scoreboard
let index = 0;
let points = 0;
let questions = [
    'Mikä on yleisen ohjemointikieli selainohjelmoinnissa?',
    'Mikä seuraavista on kitaramerkki?'
];

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
