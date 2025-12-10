document.addEventListener("DOMContentLoaded", () => {
  const layout = [
    ["A", "K", "R", "O", "P", "O", "L", "I", "S"],
    ["A", "N", "T", "A", "R", "K", "T", "I", "S"],
    ["A", "N", "D", "O", "R", "R", "A"],
    ["J", "A", "M", "A", "I", "K", "A"],
    ["D", "A", "N", "U", "B", "E"],
    ["A", "A", "S", "I", "A"],
  ];

  // määritä solut, jotka korostetaan
  const highlightPositions = [1, 3, 1, 3, 0, 1];
  const targetColumn = Math.max(...highlightPositions);

  // siirrä rivejä vasemmalle niin, että korostetut kirjaimet ovat samassa sarakkeessa
  const shiftedRows = layout.map((row, r) => {
    const desiredIndex = highlightPositions[r];
    const leftPad = targetColumn - desiredIndex;
    return [...Array(leftPad).fill("."), ...row];
  });

  // täytä rivit tyhjillä soluilla, jotta kaikki rivit ovat yhtä pitkiä
  const totalCols = Math.max(...shiftedRows.map((row) => row.length));
  const renderLayout = shiftedRows.map((row) => {
    const rightPad = totalCols - row.length;
    return [...row, ...Array(rightPad).fill(".")];
  });

  // luo ristikkoelementti
  const crossword = document.getElementById("crossword");
  crossword.classList.add("grid", "gap-1");
  crossword.style.gridTemplateColumns = `repeat(${totalCols}, 60px)`;

  // luo ristikko
  renderLayout.forEach((row, r) => {
    row.forEach((cellChar, c) => {
      const cell = document.createElement("div");
      cell.className = "cell";

      if (cellChar === ".") {
        cell.classList.add("blocked");
      } else {
        const input = document.createElement("input");
        input.maxLength = 1;
        input.className = "w-10 h-10 text-center text-black rounded";
        input.dataset.row = r;
        input.dataset.col = c;

        // korosta solut tietyssä sarakkeessa
        if (c === targetColumn) {
          cell.classList.add("reveal");
        } else {
          cell.classList.add("normal");
        }

        // automaattinen siirtyminen seuraavaan soluun
        input.addEventListener("input", () => {
          if (input.value.length === 1) {
            const next = crossword.querySelector(
              `input[data-row="${r}"][data-col="${c + 1}"]`
            );
            if (next) next.focus();
          }
        });

        cell.appendChild(input);
      }

      crossword.appendChild(cell);
    });
  });

  const checkBtn = document.getElementById("checkBtn");
  const clearBtn = document.getElementById("clearBtn");
  const hiddenWordEl = document.getElementById("hiddenWord");

  checkBtn.addEventListener("click", () => {
    let correct = true;
    let verticalWord = "";

    crossword.querySelectorAll(".cell").forEach((d) => {
      d.classList.remove("correct", "incorrect");
    });

    renderLayout.forEach((row, r) => {
      row.forEach((char, c) => {
        if (char === ".") return;

        const input = crossword.querySelector(
          `input[data-row="${r}"][data-col="${c}"]`
        );
        const val = (input.value || "").toUpperCase();
        const cellDiv = input.parentElement;

        if (val === char) {
          cellDiv.classList.add("correct");
        } else {
          cellDiv.classList.add("incorrect");
          correct = false;
        }

        if (c === targetColumn) {
          verticalWord += val || "_";
        }
      });
    });

    // näytä vastaus
    hiddenWordEl.textContent = correct
      ? "Oikea vastaus: " + verticalWord
      : "Jotain meni pieleen. Yritä uudelleen!";
  });

  // tyhjennä ristikko
  clearBtn.addEventListener("click", () => {
    crossword.querySelectorAll("input").forEach((i) => (i.value = ""));
    crossword
      .querySelectorAll(".cell")
      .forEach((d) => d.classList.remove("correct", "incorrect"));
    hiddenWordEl.textContent = "";
  });
});
