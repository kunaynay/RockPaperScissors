var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");
var score = document.querySelector("#score");

let temp = 0;

let winScore = 1;
let playerChoice = 0;
let playerScore = 0;
let cpuScore = 0;
let cpuChoice = 0;
let gameOver = false;

//Event listeners for Rock Paper or Scissors
rock.addEventListener("click", () => {
  if (!gameOver) {
    roundWinner("rock", cpuChoiceGenerator());
  }
});

paper.addEventListener("click", () => {
  if (!gameOver) {
    roundWinner("paper", cpuChoiceGenerator());
  }
});

scissors.addEventListener("click", () => {
  if (!gameOver) {
    roundWinner("scissors", cpuChoiceGenerator());
  }
});

//Event listener toset the win condition
score.addEventListener("change", () => {
  winScore = Number(score.value);
});

//Generate CPU's choice
const cpuChoiceGenerator = () => {
  temp = Math.ceil(Math.random() * 3);
  if (temp === 1) {
    return (cpuChoice = "rock");
  } else if (temp === 2) {
    return (cpuChoice = "paper");
  } else {
    return (cpuChoice = "scissors");
  }
};

//checking if player of CPu wins the turn
const roundWinner = (player, cpu) => {
  if (player === "rock" && cpu === "scissors") {
    playerScore++;
    console.log(`Player! ${player} ${cpu}`);
  } else if (player === "rock" && cpu === "paper") {
    cpuScore++;
    console.log(`CPU! ${player} ${cpu}`);
  } else if (player === "paper" && cpu === "rock") {
    playerScore++;
    console.log(`Player! ${player} ${cpu}`);
  } else if (player === "paper" && cpu === "scissors") {
    cpuScore++;
    console.log(`CPU! ${player} ${cpu}`);
  } else if (player === "scissors" && cpu === "paper") {
    playerScore++;
    console.log(`Player! ${player} ${cpu}`);
  } else if (player === "scissors" && cpu === "rock") {
    cpuScore++;
    console.log(`CPU! ${player} ${cpu}`);
  } else {
    console.log(`DRAW! ${player} ${cpu}`);
  }

  winCheck();
};

//Checking who won the entire game
const winCheck = () => {
  if (playerScore === winScore) {
    console.log("Player wins!");
    return (gameOver = true);
  } else if (cpuScore === winScore) {
    console.log("CPU Wins!");
    return (gameOver = true);
  }
};
