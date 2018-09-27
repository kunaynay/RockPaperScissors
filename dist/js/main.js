var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");
var score = document.querySelector("#score");

let winScore = 0;

rock.addEventListener("click", () => {
  console.log("Rock Clicked!");
});

paper.addEventListener("click", () => {
  console.log("Paper Clicked!");
});

scissors.addEventListener("click", () => {
  console.log("Scissors Clicked!");
});

score.addEventListener("change", () => {
  winScore = Number(score.value);
});
