let capitals = ["Beijing" , "Tokio" , "Moskova" , "Kinshasa" , "Jakarta" , "Lima" , "Kairo" , "Seoul" , "Mexico" , "Lontoo" , "Dhaka" , "Teheran" , "Bangkok" , "Hanoi" , "Bagdad" , "Riad" , "Hongkong" , "Bogota" , "Santiago" , "Ankara" , "Singapore" , "Kabul" , "Nairobi" , "Amman" , "Alger" , "Berliini" , "Madrid" , "Addis Ababa" , "Kuwait City" , "Guatemala" , "Pretoria" , "Kiova" , "Buenos Aires" , "Pjongjang" , "Taskent" , "Rooma" , "Quito" , "Yaounde" , "Lusaka" , "Khartoum" , "Brasilia" , "Taipei" , "Sanaa" , "Luanda" , "Ouagadougou" , "Accra" , "Mogadishu" , "Baku" , "Phnom Penh" , "Caracas" , "Pariisi" , "Havanna" , "Harare" , "Damaskos" , "Minsk" , "Wien" , "Varsova" , "Manila" , "Bamako" , "Kuala Lumpur" , "Bukarest" , "Budapest" , "Brazzaville" , "Belgrad" , "Kampala" , "Conakry" , "Ulaanbaatar" , "Tegucigalpa" , "Dakar" , "Praha" , "Niamey" , "Montevideo" , "Sofia" , "Muscat" , "Antananarivo" , "Astana" , "Abuja" , "Tbilisi" , "Nouakchott" , "Doha" , "Tripoli" , "Naypyidaw" , "Kigali" , "Maputo" , "Santo Domingo" , "Jerevan" , "Bishkek" , "Freetown" , "Managua" , "Ottawa" , "Islamabad" , "Monrovia" , "Abu Dhabi" , "Lilongwe" , "Port-au-Prince" , "Tukholma" , "Asmara" , "Jerusalem" , "Vientiane" , "N'Djamena" , "Amsterdam" , "Bangui" , "Panama" , "Dushanbe" , "Kathmandu" , "Lome" , "Ashgabat" , "Chisinau" , "Zagreb" , "Libreville" , "Oslo" , "Macau" , "Washington D.C." , "Kingston" , "Helsinki" , "Tunis" , "Kööpenhamina" , "Ateena" , "Riika" , "Djibouti" , "Dublin" , "Rabat" , "Vilna" , "San Salvador" , "Tirana" , "Skopje" , "Juba" , "Asuncion" , "Lissabon" , "Bissau" , "Bratislava" , "Tallinna" , "Canberra" , "Windhoek" , "Dodoma" , "Port Moresby" , "Yamoussoukro" , "Beirut" , "Sucre" , "San Juan" , "San Jose" , "Maseru" , "Nikosia" , "Malabo" , "Ljubljana" , "Dili" , "Sarajevo" , "Nassau" , "Gaborone" , "Porto-Novo" , "New Delhi" , "Paramaribo" , "Wellington" , "Manama" , "Pristina" , "Podgorica" , "Bryssel" , "Praia" , "Port Louis" , "Willemstad" , "Gitega" , "Bern" , "Tiraspol" , "Male" , "Reykjavik" , "Luxembourg" , "Georgetown" , "Thimphu" , "Moroni" , "Bridgetown" , "Sri Jayawardenepura Kotte" , "Bandar Seri Begawan" , "Mbabane" , "Noumea" , "Suva" , "Honiara" , "Banjul" , "Sao Tome" , "Tarawa" , "Port Vila" , "Saipan" , "Apia" , "Ramallah" , "Monaco" , "Saint Helier" , "Port of Spain" , "George Town" , "Gibraltar" , "St.George's" , "Oranjestad" , "Douglas" , "Majuro" , "Nukuʻalofa" , "Victoria" , "Papeete" , "Andorra la Vella" , "Torshavn" , "St.John's" , "Belmopan" , "Castries" , "Saint Peter Port" , "Nuuk" , "Roseau" , "Charlotte Amalie" , "Basseterre" , "Kingstown" , "Road Town" , "Mariehamn" , "Palikir" , "Funafuti" , "Valletta" , "Vaduz" , "Saint-Pierre" , "Avarua" , "San Marino" , "Cockburn Town" , "Pago Pago" , "Marigot" , "Gustavia" , "Stanley" , "Longyearbyen" , "Philipsburg" , "Flying Fish Cove" , "The Valley" , "Hagåtna" , "Mataʻutu" , "Hamilton" , "Yaren" , "Jamestown" , "Alofi" , "Atafu" , "Vatikaani" , "Brades" , "Kingston" , "West Island" , "Adamstown" , "King Edward Point" , "Ngerulmud" ];
let capital = capitals[Math.floor(Math.random() * capitals.length)];

//Global variables.
const num_of_guesses = 6;
let gameOver = false;
let col = 0;
let row = 0;
let guessesRemaining = num_of_guesses;
let currentString = [];
let input_letters = /^[a-zåäö]$/iu;

//Creating a gameboard, height is always 6, because there is six guesses and width depends on the word
const newGame = () => {
  let gameboard = document.getElementById("game2-gamebox");

  for (let i = 0; i < num_of_guesses; i++) {
    let row = document.createElement("div");
    row.className = "game2-box-row";

    for (let j = 0; j < capital.length; j++) {
      let box = document.createElement("div");
      let mark = capital[j];
      if (/[^a-zA-Z0-9]/.test(mark)) {
        box.className = "game2-letterbox no-fill";
        box.textContent = mark;
      } else {
        box.className = "game2-letterbox";
      }

      box.id = `${i.toString()}-${j.toString()}`;
      row.appendChild(box);
    }

    gameboard.appendChild(row);
    console.log(capital);
  }
};
newGame();

//Making eventlistener for players input and depending on pressedKey, what to do
document.addEventListener("keyup", (e) => {
  let pressedKey = e.key;
  if (pressedKey === "Backspace") {
    deleteLetter();
    return;
  } else if (pressedKey === "Enter") {
    let capital_withoutmarks = 0;
    for (let i = 0; i < capital.length; i++) {
      if (input_letters.test(capital[i])) {
        capital_withoutmarks++;
      }
    }
    if (currentString.length !== capital_withoutmarks) {
      alert("Ei tarpeeksi kirjaimia!");
      return;
    } else {
      checkGuess();
      return;
    }
  } else {
    insertLetter(pressedKey);
  }
});

//Inserting players input in gameboard
function insertLetter(pressedKey) {
  if (input_letters.test(pressedKey)) {
    if (col < capital.length) {
      let currentbox = document.getElementById(`${row}-${col}`);
      if (currentbox.classList.contains("no-fill")) {
        col += 1;
        currentbox = document.getElementById(`${row}-${col}`);
      }
      if (currentbox.textContent === "") {
        currentbox.textContent = pressedKey.toUpperCase();
        currentString.push(pressedKey.toLowerCase());
        col += 1;
      }
    }
  }
}

//Deleting a letter from gameboard
function deleteLetter() {
  if (0 < col && col <= capital.length) {
    col -= 1;
    let currentbox = document.getElementById(`${row}-${col}`);

    if (currentbox.classList.contains("no-fill") && col > 0) {
      col -= 1;
      currentbox = document.getElementById(`${row}-${col}`);
    }
    if (currentbox && currentbox.textContent !== "") {
      currentbox.textContent = "";
      currentString.pop();
    }
  }
}

//Checking the guess
function checkGuess() {
  //This is for checking, that same letter doesn't show yellow multiple times, if not needed.
  let rightword = Array.from(capital.toLowerCase());

  for (let c = 0; c < capital.length; c++) {
    let currentbox = document.getElementById(`${row}-${c}`);
    let letter = currentbox.textContent.toLowerCase();

    if (currentbox.classList.contains("no-fill")) {
      continue;
    }

    //For the correct letter
    if (rightword[c] === letter) {
      currentbox.classList.add("correct");
      //Making the letter position in array a #, so it's marked as checked.
      rightword[c] = "#";
    }
    //For the letter that's not in the right place
    else {
      let position = rightword.indexOf(letter);
      if (position !== -1) {
        currentbox.classList.add("inword");
        rightword[position] = "#";
      }
      //For the letter that's not in the word
      else {
        currentbox.classList.add("incorrect");
    
      }
    }
  }

  let guessedWord = currentString.join('').toLowerCase();
  let correctCapital = capital.toLowerCase().replace(/[^a-zåäö]/gi, '');
  if (guessedWord === correctCapital) {
    gameOver = true;
  }

  currentString = [];
  guessesRemaining -= 1;
  row += 1;
  col = 0;

  if (guessesRemaining < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    let answer = document.getElementById("answer");
    let answer_text = document.createElement("p");
    answer_text.textContent = capital.toUpperCase();
    answer.appendChild(answer_text);
    alert("Onneksi olkoon! Ratkaisit pääkaupungin");
  }
}

// for scoreboard
initScoreboard();
addPoints(2, 5);

//Lähteitä koodille
// https://medium.com/@bgw26/wordle-clone-using-javascript-5593da330891
// https://www.youtube.com/watch?v=ckjRsPaWHX8
// Web-ohjelmoinnin hirsipuu tehtävä.
// Tekoälyltä kysytty apua selvittämään koodin toimimattomuutta, kun itse ei ole selvinnyt,
// sekä apua miten saa tarkistettua myös ääkköset, joita sanoissa on.
// https://fi.wikipedia.org/w/index.php?title=Luettelo_p%C3%A4%C3%A4kaupungeista_v%C3%A4kiluvun_mukaan&veaction=edit&section=1 lista pääkaupungeista
