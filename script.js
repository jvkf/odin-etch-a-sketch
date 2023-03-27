function generateGrid(grid = 256) {
  for (let i = 0; i < grid; i++) {
    const cell = document.createElement("div");

    cell.classList.add("grid-element");
    cell.addEventListener("mouseover", addTouchedClass);
    cell.addEventListener("mouseleave", removeTouchedClass);

    container.appendChild(cell);
  }
}

function addTouchedClass(e) {
  this.classList.add("grid-element_touched");
}

function removeTouchedClass(e) {
  setTimeout(() => {
    this.classList.remove("grid-element_touched");
  }, 2000);
}

function changeGridSize(e) {
  const size = Number(prompt("Enter a number from 1 to 100 please"));
  if (size >= 1 && size <= 100) {
    container.innerHTML = "";
    generateGrid(size ** 2);
    updateCSS(size);
  } else {
    alert("Invalid input! Please enter a number from 1 to 100.");
  }
}

function updateCSS(number) {
  const convertedSize = 100 / number;
  document.documentElement.style.setProperty(
    `--element-size`,
    `${convertedSize}%`
  );
}

const container = document.querySelector(".main .grid");
const toggleButton = document.querySelector(".toggle-button");

toggleButton.addEventListener("click", changeGridSize);

generateGrid();
