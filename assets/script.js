const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector(".results");
const playerWinCount = document.querySelector(".player-count");
const computerWinCount = document.querySelector(".computer-count");
let playerScore = 0;
let computerScore = 0;
const numberOfRounds = 5;

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice())
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice())
});

scissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice())
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(selection1, selection2) {
  if (selection1 === selection2) {
    results.textContent = (`Draw! Both chose ${selection1}.`);
    results.style.visibility = "visible";
    checkScore();
  } else if (selection1 === "rock" && selection2 === "scissors" || selection1 === "paper" && selection2 === "rock" || selection1 === "scissors" && selection2 === "paper") {
    results.textContent = (`You win! ${selection1} beats ${selection2}.`);
    results.style.visibility = "visible";
    playerScore++;
    checkScore();
  } else if (selection1 === "scissors" && selection2 === "rock" || selection1 === "rock" && selection2 === "paper" || selection1 === "paper" && selection2 === "scissors") {
    results.textContent = (`You lose! ${selection2} beats ${selection1}.`);
    results.style.visibility = "visible";
    computerScore++;
    checkScore();
  } else {
    console.log("Error");
  }
  playerWinCount.textContent = (`Player score: ${playerScore}`);
  computerWinCount.textContent = (`Computer score: ${computerScore}`);
};

function checkScore() {
  if (playerScore === 5) {
    alert ("You win!");
    resetGame();
  } if (computerScore === 5) {
    alert ("You lose!");
    resetGame();
  }
};

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerWinCount.textContent = ("");
  computerWinCount.textContent = ("");
  results.style.visibility = "hidden";
};
