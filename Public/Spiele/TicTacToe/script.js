console.log("Hello World");

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