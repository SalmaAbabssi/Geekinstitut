const grid = document.getElementById("grid");
const palette = document.querySelectorAll(".color");
let currentColor = "black";
let isDrawing = false;

// Créer la grille
for (let i = 0; i < 400; i++) {  // 20 x 20
  const cell = document.createElement("div");
  cell.classList.add("cell");
  grid.appendChild(cell);

  // Ajouter les événements pour dessiner
  cell.addEventListener("mousedown", () => {
    isDrawing = true;
    cell.style.backgroundColor = currentColor;
  });

  cell.addEventListener("mouseover", () => {
    if (isDrawing) {
      cell.style.backgroundColor = currentColor;
    }
  });

  cell.addEventListener("mouseup", () => {
    isDrawing = false;
  });
}

document.body.addEventListener("mouseup", () => {
  isDrawing = false;
});

// Choisir une couleur
palette.forEach(colorEl => {
  colorEl.addEventListener("click", () => {
    palette.forEach(c => c.classList.remove("selected"));
    colorEl.classList.add("selected");
    currentColor = colorEl.dataset.color;
  });
  const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.style.backgroundColor = "white";
  });
});

});
