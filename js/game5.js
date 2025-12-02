// for scoreboard
let points = 0; 


// modal quiz functionality


    const questions = {
        1: {
            question: "Itämeri on altis rehevöitymiselle ja saasteille. Rannikkovesiämme rehevöittävät erityisesti... ",
            answers: ["Risteilyliikenne", "Maa- ja metsätaloudesta valuvat ravinteet", "Mereen päätynyt muovi", "Öljyonnettomuudet"],
            correct: 1, 
        info: "Itämeri on erityisen herkkä ja altis saasteille, sillä se on matala sisämeri, jonka vesi vaihtuu hitaasti. Ylimääräisten maa- ja metsätalousravinteiden aiheuttama rehevöityminen on Itämeren ongelmista suurin. Myös ylikalastus, ilmastonmuutos, öljykuljetukset sekä lisääntyvä laivaliikenne uhkaavat Itämerta. Itämeren rantavaltiot ovat sitoutuneet parantamaan meren tilaa merkittävästi. Tämä vaatii poliittista sitoutumista ilmastohaittojen vähentämiseen sekä riittävää rahoitusta. (WWF Suomi 2025.)"
        },
        2: {
            question: "Mistä tunnetusta maamerkistä löytyy alkuperäinen Mona Lisa -teos?",
            answers: ["Louvre", "Notre-Dame", "Versaillesin palatsi", "Palais Idéal"],
            correct: 0,
            info: "Louvre on tunnettu taidemuseo Ranskassa. Se on yksi maailman vanhimpia museoita ja pinta-alaltaan maailman kolmanneksi suurin. Museon tunnetuimpiin teoksiin kuuluvat muun muassa maailman kalleimmaksi maalaukseksi arvioitu Leonardo da Vincin Mona Lisa, Raphaëlin Kaunis puutarhuri (Belle Jardinière), Véronèsen Kaanaan häät (Les Noces de Cana) sekä veistokset Milon Venus ja Samothraken Nike. (Airaksinen & Savolainen 2019.)"
        },
        3: {
            question: "Mikä näistä lämpövyöhykkeistä koskevista väitteistä ei pidä paikkaansa?",
            answers: ["Lämpimään eli subtrooppiseen vyöhykkeeseen tyypillistä on leuto, kostea talvi sekä kuuma, kuiva kesä.", "Eurooppa kuuluu suurimmaksi osaksi lauhkeaan vyöhykkeeseen.", "Kylmä vyöhyke sijoittuu pelkästään maapallon pohjoisimmille alueille.", "Kasveja ja eläimiä, kuten hyönteisiä ja matelijoita, on eniten kuumassa vyöhykkeessä."],
            correct: 2,
            info: "Kylmä vyöhyke ei sijaitse pelkästään pohjoisessa, vaan kylmän vyöhykkeen alue on myös maapallon eteläisimmissä osissa etelänavalla. Lämpövyöhykkeet perustuvat alueen etäisyyteen päiväntasaajalta, jolle aurinko paistaa kohtisuoraan. Lisäksi lämpövyöhykkeeseen vaikuttavat tuulet, merivirrat, etäisyys merestä ja pinnanmuodot.  (Peda.net 2025.)"
        },
        4: {
            question: "Mikä saari? Tällä Välimeren saarella aurinko paistaa läpi vuoden. Siellä on roomalaisia raunioita, bysanttilaisia linnoituksia, mosaiikkeja, Afroditen patsaita ja keskiaikaisia kirkkoja. Turistit asuvat usein esimerkiksi Ayia Napassa tai Larnacassa.",
            answers: ["Rodos", "Kreeta", "Sardinia", "Kypros"],
            correct: 3,
            info: "Kypros on suosittu matkakohde, joka tarjoaa turisteille sekä aurinkoista säätä että kulttuurillisia elämyksiä. Saaren historiaan ja kulttuuriin ovat vaikuttaneet helleenien, foinikialaisten, roomalaisten, Bysantin ja Osmanian aikakaudet.  Kypros on kuitenkin jakautunut kahtia kreikkalaisen ja turkkilaisen väestön kesken konfliktien seurauksena.  Pohjois-Kyproksen turkkilaiseksi tasavallaksi kutsuttu Turkin miehittämä alue perustettiin vuonna 1983, mutta sitä ei ole tunnustanut yksikään valtio Turkin lisäksi. Kahta kolmasosaa saaresta hallitseva Kyproksen tasavalta liittyi EU:n jäseneksi vuonna 2004. Kyproksen konflikti on yksi syistä, jonka takia Turkki ei edelleenkään ole EU:n jäsen. (Luikku 2023.)"
        },
    };



function openQuestion(id) {
    const modalElement = document.getElementById("quizModal");
    const modal = new bootstrap.Modal(modalElement);
    const q = questions[id];

    document.getElementById("questionTitle").innerText = q.question;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    q.answers.forEach((answerText, index) => {
        const btn = document.createElement("button");
        btn.className = "btn btn-primary w-100 my-2";
        btn.innerText = answerText;

        btn.onclick = () => handleAnswer(id, index);

        choicesDiv.appendChild(btn);
    });

    modal.show();
}

function handleAnswer(id, chosenIndex) {
    const q = questions[id];
    const choicesDiv = document.getElementById("choices");

    // Remove/hide all answer buttons
    choicesDiv.innerHTML = "";

    // show correct/incorrect message
    const resultMsg = document.createElement("p");
    resultMsg.className = "fw-bold";
    if (chosenIndex === q.correct) {
        resultMsg.innerText = "Oikea vastaus!";
        points++;
        console.log("Points:", points);
    } else {
        resultMsg.innerText = "Väärä vastaus!";
    }
    choicesDiv.appendChild(resultMsg);

    // show info text
    const explanation = document.createElement("p");
    explanation.className = "answer-info mt-2";
    explanation.innerText = q.info || "No additional info.";
    choicesDiv.appendChild(explanation);


    // localStorage.setItem('game5', (Number(localStorage.getItem('game5')) || 0) + points);
}