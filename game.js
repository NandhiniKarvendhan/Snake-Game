let gameStartButton = document.querySelector("button");
let gameBoard = document.getElementById("game-board");
let score = document.getElementById("score");
let highestScore = document.getElementById("highest-score");
let food = document.getElementById("food");
let snake = document.getElementsByClassName("snake");

let foodX = Math.floor(30 * Math.random()) + 1;
console.log(foodX);
let foodY = Math.round(30 * Math.random()) + 1;
console.log(foodY);
// gameStartButton.onclick = foodLocation;
function foodLocation() {
  food.style.gridArea = 16 / 6;
}
