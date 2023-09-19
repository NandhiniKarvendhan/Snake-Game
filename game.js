let gameBoard = document.getElementById("game-board");
let score = document.getElementById("score");
let highestScore = document.getElementById("highest-score");

let foodX = 15,
  foodY = 10;

const updateFoodPosition = () => {
  // Passing a random 1 - 30 value as food position
  foodX = Math.floor(Math.random() * 30) + 1;
  console.log(foodX);
  foodY = Math.floor(Math.random() * 30) + 1;
  console.log(foodY);
};
updateFoodPosition();
