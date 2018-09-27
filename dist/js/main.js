const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const score = document.querySelector("#score");
const reset = document.querySelector("#reset");
const playerScoreDisplay = document.querySelector(".playerScoreDisplay");
const playerChoiceDisplay = document.querySelector(".playerChoiceDisplay");
const playerChoiceDisplayIcon = document.querySelector(".icon");
const cpuScoreDisplay = document.querySelector(".cpuScoreDisplay");
const cpuChoiceDisplay = document.querySelector(".cpuChoiceDisplay");
const cpuChoiceDisplayIcon = document.querySelector(".icon");
const heading = document.querySelector(".heading");
const body = document.querySelector("body");

let temp = 0;
let classify = "";

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
    classify = "win";
    choiceDisplay(player, cpu, classify);
    body.style.background = "#00cf26";
  } else if (
    (player === "rock" && cpu === "paper") ||
    (player === "paper" && cpu === "scissors") ||
    (player === "scissors" && cpu === "rock")
  ) {
    cpuScore++;
    cpuScoreDisplay.textContent = cpuScore;
    classify = "loss";
    choiceDisplay(player, cpu, classify);
    body.style.background = "#b20033";
  } else {
    classify = "draw";
    choiceDisplay(player, cpu, classify);
    body.style.background = "#0080ff";
  }

  winCheck();
};

//Checking who won the entire game
const winCheck = () => {
  if (playerScore === winScore) {
    heading.textContent = "Player wins!";
    window.scrollTo(0, 0);
    return (gameOver = true);
  } else if (cpuScore === winScore) {
    heading.textContent = "CPU wins!";
    window.scrollTo(0, 0);
    return (gameOver = true);
  }
};

//Score Reset/Replay
const resetAll = () => {
  playerScore = 0;
  cpuScore = 0;
  gameOver = false;
  heading.textContent = "Rock Paper Scissors!";
  scoreDisplay();
  choiceDisplayReset();
  body.style.background = "#0080ff";
};

//Display function

const choiceDisplay = (player, cpu, classify) => {
  cpuChoiceDisplay.innerHTML = `<i class="fas fa-hand-${cpu} icon icon-${classify}">`;
  playerChoiceDisplay.innerHTML = `<i class="fas fa-hand-${player} icon icon-${classify}">`;
};
const choiceDisplayReset = () => {
  cpuChoiceDisplay.innerHTML = `<i class="far fa-circle icon icon-draw"></i>`;
  playerChoiceDisplay.innerHTML = `<i class="far fa-circle icon icon-draw"></i>`;
};

const scoreDisplay = () => {
  playerScoreDisplay.textContent = playerScore;
  cpuScoreDisplay.textContent = cpuScore;
};
