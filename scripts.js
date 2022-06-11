const grid = document.querySelector('.grid');
const square = document.querySelector('div');
const resetButton = document.querySelector('.resetButton')
const userInput = document.querySelector('.gridSize');

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
}

function newGrid() {
    grid.innerHTML = "";
    grid.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 1fr)`
    );
    grid.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput.value}, 1fr)`
    );
    for (let i = 0; i < userInput.value * userInput.value; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
};

userInput.addEventListener('change', newGrid)

grid.addEventListener('mouseover', function(event) {
    event.target.classList.replace('square', 'color');
});

resetButton.addEventListener('click', function() {
    grid.innerHTML = "";
    userInput.valie = "";
    grid.style.setProperty("grid-template-columns", `repeat(16, 1fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 1fr)`);
    createGrid();
});

createGrid()