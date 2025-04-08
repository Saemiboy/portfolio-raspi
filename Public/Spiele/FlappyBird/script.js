const bird = document.getElementById("bird");
const gameBoard = document.getElementById("game");
const score = document.getElementById("scoreValue");
const restartBtn = document.getElementById("restart");

let gravity = 0.6;
let bird_v = 0;
let bird_y = 200;
let isGameOver = false;

setInterval(() => {
  if (!isGameOver) {
    bird_v += gravity;
    bird_y += bird_v;

    if (bird_y > gameBoard.clientHeight - bird.clientHeight) {
      isGameOver = true;
      alert("Game Over! Your score: " + score.innerText);
    }

    bird.style.top = bird_y + "px";
  }
}
, 20);
document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    bird_v = -10;
  }
});
restartBtn.addEventListener("click", () => {
  isGameOver = false;
  bird_v = 0;
  bird_y = 200;
  score.innerText = "0";
  bird.style.top = bird_y + "px";
});

