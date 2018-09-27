const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const score = document.querySelector("#score");
const reset = document.querySelector("#reset");
const playerScoreDisplay = document.querySelector(".playerScoreDisplay");
const playerChoiceDisplay = document.querySelector(".playerChoiceDisplay");
const cpuScoreDisplay = document.querySelector(".cpuScoreDisplay");
const cpuChoiceDisplay = document.querySelector(".cpuChoiceDisplay");

let temp = 0;

let winScore = 3;
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

reset.addEventListener("click", () => {
  resetAll();
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
  if (
    (player === "rock" && cpu === "scissors") ||
    (player === "paper" && cpu === "rock") ||
    (player === "scissors" && cpu === "paper")
  ) {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    choiceDisplay(player, cpu);
    console.log(`Player! ${player} ${cpu}`);
  } else if (
    (player === "rock" && cpu === "paper") ||
    (player === "paper" && cpu === "scissors") ||
    (player === "scissors" && cpu === "rock")
  ) {
    cpuScore++;
    cpuScoreDisplay.textContent = cpuScore;
    choiceDisplay(player, cpu);
    console.log(`CPU! ${player} ${cpu}`);
  } else {
    choiceDisplay(player, cpu);
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

//Score Reset/Replay
const resetAll = () => {
  playerScore = 0;
  cpuScore = 0;
  gameOver = false;
  scoreDisplay();
  choiceDisplay("None", "None");
};

//Display function

const choiceDisplay = (player, cpu) => {
  cpuChoiceDisplay.textContent = cpu;
  playerChoiceDisplay.textContent = player;
};

const scoreDisplay = () => {
  playerScoreDisplay.textContent = playerScore;
  cpuScoreDisplay.textContent = cpuScore;
};
