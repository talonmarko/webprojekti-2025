let capitals = [
  "Beijing",
  "Tokio",
  "Moskova",
  "Kinshasa",
  "Jakarta",
  "Lima",
  "Kairo",
  "Seoul",
  "Mexico",
  "Lontoo",
  "Dhaka",
  "Teheran",
  "Bangkok",
  "Hanoi",
  "Bagdad",
  "Riad",
  "Hongkong",
  "Bogota",
  "Santiago",
  "Ankara",
  "Singapore",
  "Kabul",
  "Nairobi",
  "Amman",
  "Alger",
  "Berliini",
  "Madrid",
  "Addis Ababa",
  "Kuwait City",
  "Guatemala",
  "Pretoria",
  "Kiova",
  "Buenos Aires",
  "Pjongjang",
  "Taskent",
  "Rooma",
  "Quito",
  "Yaounde",
  "Lusaka",
  "Khartoum",
  "Brasilia",
  "Taipei",
  "Sanaa",
  "Luanda",
  "Ouagadougou",
  "Accra",
  "Mogadishu",
  "Baku",
  "Phnom Penh",
  "Caracas",
  "Pariisi",
  "Havanna",
  "Harare",
  "Damaskos",
  "Minsk",
  "Wien",
  "Varsova",
  "Manila",
  "Bamako",
  "Kuala Lumpur",
  "Bukarest",
  "Budapest",
  "Brazzaville",
  "Belgrad",
  "Kampala",
  "Conakry",
  "Ulaanbaatar",
  "Tegucigalpa",
  "Dakar",
  "Praha",
  "Niamey",
  "Montevideo",
  "Sofia",
  "Muscat",
  "Antananarivo",
  "Astana",
  "Abuja",
  "Tbilisi",
  "Nouakchott",
  "Doha",
  "Tripoli",
  "Naypyidaw",
  "Kigali",
  "Maputo",
  "Santo Domingo",
  "Jerevan",
  "Bishkek",
  "Freetown",
  "Managua",
  "Ottawa",
  "Islamabad",
  "Monrovia",
  "Abu Dhabi",
  "Lilongwe",
  "Port-au-Prince",
  "Tukholma",
  "Asmara",
  "Jerusalem",
  "Vientiane",
  "N'Djamena",
  "Amsterdam",
  "Bangui",
  "Panama",
  "Dushanbe",
  "Kathmandu",
  "Lome",
  "Ashgabat",
  "Chisinau",
  "Zagreb",
  "Libreville",
  "Oslo",
  "Macau",
  "Washington D.C.",
  "Kingston",
  "Helsinki",
  "Tunis",
  "Kööpenhamina",
  "Ateena",
  "Riika",
  "Djibouti",
  "Dublin",
  "Rabat",
  "Vilna",
  "San Salvador",
  "Tirana",
  "Skopje",
  "Juba",
  "Asuncion",
  "Lissabon",
  "Bissau",
  "Bratislava",
  "Tallinna",
  "Canberra",
  "Windhoek",
  "Dodoma",
  "Port Moresby",
  "Yamoussoukro",
  "Beirut",
  "Sucre",
  "San Juan",
  "San Jose",
  "Maseru",
  "Nikosia",
  "Malabo",
  "Ljubljana",
  "Dili",
  "Sarajevo",
  "Nassau",
  "Gaborone",
  "Porto-Novo",
  "New Delhi",
  "Paramaribo",
  "Wellington",
  "Manama",
  "Pristina",
  "Podgorica",
  "Bryssel",
  "Praia",
  "Port Louis",
  "Willemstad",
  "Gitega",
  "Bern",
  "Tiraspol",
  "Male",
  "Reykjavik",
  "Luxembourg",
  "Georgetown",
  "Thimphu",
  "Moroni",
  "Bridgetown",
  "Sri Jayawardenepura Kotte",
  "Bandar Seri Begawan",
  "Mbabane",
  "Noumea",
  "Suva",
  "Honiara",
  "Banjul",
  "Sao Tome",
  "Tarawa",
  "Port Vila",
  "Saipan",
  "Apia",
  "Ramallah",
  "Monaco",
  "Saint Helier",
  "Port of Spain",
  "George Town",
  "Gibraltar",
  "St.George's",
  "Oranjestad",
  "Douglas",
  "Majuro",
  "Nukuʻalofa",
  "Victoria",
  "Papeete",
  "Andorra la Vella",
  "Torshavn",
  "St.John's",
  "Belmopan",
  "Castries",
  "Saint Peter Port",
  "Nuuk",
  "Roseau",
  "Charlotte Amalie",
  "Basseterre",
  "Kingstown",
  "Road Town",
  "Mariehamn",
  "Palikir",
  "Funafuti",
  "Valletta",
  "Vaduz",
  "Saint-Pierre",
  "Avarua",
  "San Marino",
  "Cockburn Town",
  "Pago Pago",
  "Marigot",
  "Gustavia",
  "Stanley",
  "Longyearbyen",
  "Philipsburg",
  "Flying Fish Cove",
  "The Valley",
  "Hagåtna",
  "Mataʻutu",
  "Hamilton",
  "Yaren",
  "Jamestown",
  "Alofi",
  "Atafu",
  "Vatikaani",
  "Brades",
  "Kingston",
  "West Island",
  "Adamstown",
  "King Edward Point",
  "Ngerulmud",
];
let capital = capitals[Math.floor(Math.random() * capitals.length)];
//let capital = "Kööpenhamina";


//Global variables.
const num_of_guesses = 6;
let gameOver = false;
let gameWon = false;
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
      if (/[^a-zA-Z0-9åäöÅÄÖ]/.test(mark)) {
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

//Physical keyboard input reader
document.addEventListener("keyup", (e) => {
  let pressedKey = e.key;
  processInput(pressedKey);
});

//On-Screen keyboard initialize and functions
function insertKeyboard() {
  let keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Å"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"],
    ["⌫", "Z", "X", "C", "V", "B", "N", "M", "Enter"],
  ];
  let keyboard_div = document.getElementById("game2-keyboard");

  for (let i = 0; i < keyboard.length; i++) {
    let currKeyboard_row = keyboard[i];
    let keyboard_row = document.createElement("div");
    keyboard_row.className = "game2-keyboardRow";

    for (let j = 0; j < currKeyboard_row.length; j++) {
      let keyboard_box = document.createElement("div");
      let key = currKeyboard_row[j];
      keyboard_box.textContent = key;

      if (key == "⌫") {
        keyboard_box.id = "Backspace";
        keyboard_box.className = "game2-keyboard-wide";
      } else if (key == "Enter") {
        keyboard_box.className = "game2-keyboard-wide";
        keyboard_box.id = key;
      } else {
        keyboard_box.className = "game2-keyboard-box";
        keyboard_box.id = key;
      }
      keyboard_box.addEventListener("click", () => {
        if (key === "⌫") {
          processInput("Backspace");
        } else {
          processInput(key);
        }
      });

      keyboard_row.appendChild(keyboard_box);
    }
    keyboard_div.appendChild(keyboard_row);
  }
}
insertKeyboard();

//Function to process the onscreen keyboard and physical keyboard
function processInput(pressedKey) {
  if (gameOver || gameWon) return;

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
}

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
  setTimeout
  //This is for checking, that same letter doesn't show yellow multiple times, if not needed.
  let rightword = Array.from(capital.toLowerCase());

  for (let c = 0; c < capital.length; c++) {
    let currentbox = document.getElementById(`${row}-${c}`);
    let letter = currentbox.textContent.toLowerCase();

    if (currentbox.classList.contains("no-fill")) {
      continue;
    }

    let curr_keybox = document.getElementById(letter.toUpperCase());

    //For the correct letter
    if (rightword[c] === letter) {
      currentbox.classList.add("correct");
      if (curr_keybox) {
        curr_keybox.classList.remove("inword");
        curr_keybox.classList.add("correct");
      }
      //Making the letter position in array a #, so it's marked as checked.
      rightword[c] = "#";
    }
    //For the letter that's not in the right place
    else {
      let position = rightword.indexOf(letter);
      if (position !== -1) {
        currentbox.classList.add("inword");

        if (curr_keybox && !curr_keybox.classList.contains("correct")) {
          curr_keybox.classList.add("inword");
        }
        rightword[position] = "#";
      }
      //For the letter that's not in the word
      else {
        currentbox.classList.add("incorrect");
        if (curr_keybox && !curr_keybox.classList.contains("correct") && !curr_keybox.classList.contains("inword")) {
          curr_keybox.classList.add("incorrect");
        }
      }
    }
  }
  // Comparing the guessed word that is matches the right word, without special marks.
  let guessedWord = currentString.join("").toLowerCase();
  let correctCapital = capital.toLowerCase().replace(/[^a-zåäö]/gi, "");
  if (guessedWord === correctCapital) {
    gameWon = true;
  }
  //Refreshing the current string, so comparing it works, lowering guesses and starting new row
  currentString = [];
  guessesRemaining -= 1;
  row += 1;
  col = 0;

  //For right guess, we go here
  if (gameWon == true) {
    pointCalculator();
    showingAnswer();
    //Showing how many points you get
    let points = guessesRemaining * 2;
    if (guessesRemaining == 0) {
      points = 1;
    }
    alert(`Onneksi olkoon! Ratkaisit pääkaupungin. Sait ${points} pistettä!`);
  }
  // If all the guesses are used, we go here
  else if (guessesRemaining == 0) {
    gameOver = true;
    showingAnswer();
    alert("Valitettavasti et tällä kertaa arvannut kaupunkia :(");
  }
}

//Function to show the right guess and making refresh button.
function showingAnswer() {
  let answer = document.getElementById("answer");
  let answer_text = document.createElement("p");
  let answer_capital = document.createElement("p");
  answer_text.textContent = "Oikea vastaus:";
  answer_capital.textContent = capital.toUpperCase();
  answer.appendChild(answer_text);
  answer.appendChild(answer_capital);

  let cat_gif = document.createElement("img");
  cat_gif.src = "./img/lentokisu.gif";
  cat_gif.classList.add("cat_gif");
  answer.appendChild(cat_gif);

  let refresh_button = document.createElement("button");
  refresh_button.textContent = "Pelaa uudestaan!";
  refresh_button.className = "rfs_btn";
  refresh_button.addEventListener("click", () => location.reload());
  answer.appendChild(refresh_button);
}
//Calculating points and adding them to local storage
function pointCalculator() {
  let points = guessesRemaining * 2;
  if (guessesRemaining == 0) {
    points = 1;
  }
  localStorage.setItem('game2', (Number(localStorage.getItem('game2')) || 0) + points);
}



//Lähteitä koodille
// https://medium.com/@bgw26/wordle-clone-using-javascript-5593da330891
// https://www.youtube.com/watch?v=ckjRsPaWHX8
// https://www.youtube.com/watch?v=MM9FAV_CEkU
// Web-ohjelmoinnin hirsipuu tehtävä.
// Tekoälyltä kysytty apua selvittämään koodin toimimattomuutta, kun itse ei ole selvinnyt,
// sekä apua miten saa tarkistettua myös ääkköset, joita sanoissa on.
// https://fi.wikipedia.org/w/index.php?title=Luettelo_p%C3%A4%C3%A4kaupungeista_v%C3%A4kiluvun_mukaan&veaction=edit&section=1 lista pääkaupungeista
