let gameBoard = document.getElementById("game-board");
let score = document.getElementById("score");
let highestScore = document.getElementById("highest-score");

let foodX, foodY;
let snakeX = 2,
  snakeY = 2;

const startGame = () => {
  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
  htmlMarkup += `<div class="snake" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
  gameBoard.innerHTML = htmlMarkup;
};

const updateFoodPosition = () => {
  // Passing a random 1 - 30 value as food position
  foodX = Math.floor(Math.random() * 30) + 1;
  console.log(foodX);
  foodY = Math.floor(Math.random() * 30) + 1;
  console.log(foodY);
};
updateFoodPosition();
startGame();
