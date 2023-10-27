let gameBoard = document.getElementById("game-board");
let score = document.getElementById("score");
let highestScore = document.getElementById("highest-score");

let foodX, foodY;
let snakeX = 2,
  snakeY = 2;
let velocityX = 0,
  velocityY = 0;
let snakeBody = [];
let gameScore = 0,
  gameHighestScore = localStorage.getItem("high-score");
console.log(gameHighestScore);
const startGame = () => {
  snakeX += velocityX;
  snakeY += velocityY;
  let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"><img src="./apple.png" /></div>`;
  htmlMarkup += `<div class="snake" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
  gameBoard.innerHTML = htmlMarkup;
  // changing food postion after snake eats the food
  if ((snakeX === foodX) & (snakeY === foodY)) {
    updateFoodPosition();
    snakeBody.push([foodY, foodX]);
    gameScore += 1;
    score.innerHTML = `Score: ${gameScore}`;
    gameHighestScore =
      gameScore >= gameHighestScore ? gameScore : gameHighestScore;
    localStorage.setItem("high-score", gameHighestScore);
    console.log(gameHighestScore);
    highestScore.innerHTML = `Highest Score: ${gameHighestScore}`;
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
    console.log(snakeBody);
  }
  snakeBody[0] = [snakeX, snakeY];
  if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
    gameOver();
  }
  for (let i = 0; i < snakeBody.length; i++) {
    // Adding a div for each part of the snake's body
    htmlMarkup += `<div class="snake" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    // Checking if the snake head hit the body, if so set gameOver to true
    if (
      i !== 0 &&
      snakeBody[0][1] === snakeBody[i][1] &&
      snakeBody[0][0] === snakeBody[i][0]
    ) {
      //   gameOver = true;
      gameOver();
    }
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
  if ((e.key == "ArrowLeft") & (velocityX != 1)) {
    velocityX = -1;
    velocityY = 0;
  } else if ((e.key == "ArrowRight") & (velocityX != -1)) {
    velocityX = 1;
    velocityY = 0;
  } else if ((e.key == "ArrowUp") & (velocityY != 1)) {
    velocityX = 0;
    velocityY = -1;
  } else if ((e.key == "ArrowDown") & (velocityY != -1)) {
    velocityX = 0;
    velocityY = 1;
  }
  startGame();
};

document.addEventListener("keydown", changeDirection);
updateFoodPosition();
let game = setInterval(startGame, 165);
