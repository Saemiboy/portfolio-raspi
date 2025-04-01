console.log("Hello World");

const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('statusText');
const restartBtn = document.getElementById('restartBtn');

let currentPlayer = 'X';
let grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

function initialize() {
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            drawMove(cell)
        })
    });
    statusText.textContent = `${currentPlayer} ist an der Reihe.`;
    restartBtn.addEventListener('click', restartGame);
};

function restartGame() {
    // console.log('askdjflsa')
};

function drawMove(cell){
    let cell_id = parseInt(cell.getAttribute('cell_id'), 10);
    if (grid[Math.floor(cell_id / 3)][cell_id % 3] === '') {
        cell.textContent = currentPlayer;
        grid[Math.floor(cell_id / 3)][cell_id % 3] = currentPlayer;
        switchPlayer()
    };
};

function switchPlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    }
    else {
        currentPlayer = 'X';
    }
    statusText.textContent = `${currentPlayer} ist an der Reihe.`;
}

initialize();

// document.getElementById("gameboard").addEventListener("click", (event) => {
//     console.log("Gedrückt auf: ", event.target)
// })

// const SIZE = 300;
// const CELLSIZE = Math.floor(SIZE / 3);
// const canvas = document.getElementById("gameboard1");
// const ctx = canvas.getContext("2d");

// function drawGrid() {
//     ctx.linewidth = 7;
//     ctx.strokeStyle = 'black';
//     for (let j = 1; j < 3; j++) {
//         ctx.beginPath();
//         ctx.moveTo(0, j*CELLSIZE);
//         ctx.lineTo(SIZE, j*CELLSIZE);
//         ctx.closePath();
//         ctx.stroke();
//         console.log(SIZE, j*CELLSIZE)
//     }
//     for (let i = 1; i < 3; i++) {
//         ctx.beginPath();
//         ctx.moveTo(i*CELLSIZE, 0);
//         ctx.lineTo(i*CELLSIZE, SIZE);
//         ctx.closePath();
//         ctx.stroke();
//     }
// }

// drawGrid();