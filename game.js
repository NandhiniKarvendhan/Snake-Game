let gameBoard = document.getElementById("game-board");
let score = document.getElementById("score");
let highestScore = document.getElementById("highest-score");

let foodX, foodY;
let snakeX = 2,
  snakeY = 2;
let velocityX = 0,
  velocityY = 0;
let gameScore = 0,
  gameHighestScore = localStorage.getItem("high-score");
console.log(gameHighestScore);
const startGame = () => {
  snakeX += velocityX;
  snakeY += velocityY;
  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
  htmlMarkup += `<div class="snake" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
  gameBoard.innerHTML = htmlMarkup;
  // changing food postion after snake eats the food
  if ((snakeX === foodX) & (snakeY === foodY)) {
    updateFoodPosition();
    gameScore += 1;
    score.innerHTML = `Score: ${gameScore}`;
    gameHighestScore =
      gameScore >= gameHighestScore ? gameScore : gameHighestScore;
    localStorage.setItem("high-score", gameHighestScore);
    console.log(gameHighestScore);
    highestScore.innerHTML = `Highest Score: ${gameHighestScore}`;
  }
  if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    gameOver();
  }
};

// Game over
const gameOver = () => {
  location.reload();
  alert(`Game over`);
  clearInterval(game);
};

// Changing food position
const updateFoodPosition = () => {
  // Passing a random 1 - 30 value as food position
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

// Changing snake direction according to aroow keys
const changeDirection = (e) => {
  if (e.key == "ArrowLeft") {
    velocityX = -1;
    velocityY = 0;
  } else if (e.key == "ArrowRight") {
    velocityX = 1;
    velocityY = 0;
  } else if (e.key == "ArrowUp") {
    velocityX = 0;
    velocityY = -1;
  } else if (e.key == "ArrowDown") {
    velocityX = 0;
    velocityY = 1;
  }
  startGame();
};

document.addEventListener("keydown", changeDirection);
updateFoodPosition();
let game = setInterval(startGame, 165);
