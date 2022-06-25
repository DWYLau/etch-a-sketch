let color = 'black';

function createGrid(size) {
    const grid = document.querySelector('.grid');
    const gridSquares = grid.querySelectorAll('div');
    gridSquares.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let gridSize = size * size;
    for (let i = 0; i < gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.addEventListener('mouseover', colorSquare);
        gridSquare.style.backgroundColor = 'white';
        grid.appendChild(gridSquare);
    }
}

createGrid(16);

function newGrid(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector('.error').style.display = 'none';
        createGrid(input);
    }   else {
        document.querySelector('.error').style.display = 'flex';
    }
}

function colorSquare() {
    if (color === 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }   else {
        this.style.backgroundColor = color;
    }
};

function changeColor(colorChoice) {
    color = colorChoice;
}

document.querySelector('#input-color').addEventListener('input', function(e) {
    color = e.target.value;
});

document.querySelector('.resetButton').addEventListener('click', function() {
    const grid = document.querySelector('.grid');
    const gridSquares = grid.querySelectorAll('div');
    gridSquares.forEach((div) => (div.style.backgroundColor = 'white'));
    color = 'black';
});