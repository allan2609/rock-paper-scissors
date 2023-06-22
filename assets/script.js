const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector(".results");
const playerWinCount = document.querySelector(".player-count");
const computerWinCount = document.querySelector(".computer-count");
let playerScore = 0;
let computerScore = 0;
const numberOfRounds = 5;
const modalTitle = document.querySelector(".modal-title");
const modalContent = document.querySelector(".modal-content");
const modalBody = document.querySelector(".modal-body");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const blurBg = document.querySelector(".blur-bg");

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
    results.textContent = ("You win! ")+ (`${selection1}`).charAt(0).toUpperCase() + (`${selection1}`).slice(1) + " beats " + (`${selection2}.`);
    results.style.visibility = "visible";
    playerScore++;
    checkScore();
  } else if (selection1 === "scissors" && selection2 === "rock" || selection1 === "rock" && selection2 === "paper" || selection1 === "paper" && selection2 === "scissors") {
    results.textContent = ("You lose! ")+ (`${selection2}`).charAt(0).toUpperCase() + (`${selection2}`).slice(1) + " beats " + (`${selection1}.`);
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
    modalTitle.textContent = ("You won!");
    modalBody.textContent = (`You won ${playerScore} rounds against computer's ${computerScore}. Play again?`);
    showResults();
  } if (computerScore === 5) {
    modalTitle.textContent = ("You lose!");
    modalBody.textContent = (`Computer won ${computerScore} rounds against your ${playerScore}. Play again?`);
    showResults();
  }
};

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerWinCount.textContent = ("");
  computerWinCount.textContent = ("");
  results.style.visibility = "hidden";
};

function showResults() {
  modalContent.classList.remove("hidden-modal");
  blurBg.classList.remove("hidden-blur");
};

function closeModalFunction() {
  modalContent.classList.add("hidden-modal")
  blurBg.classList.add("hidden-blur")
  resetGame();
};

blurBg.addEventListener("click", closeModalFunction);
closeModal.addEventListener("click", closeModalFunction);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modalContent.classList.contains("hidden")) {
        closeModalFunction();
    }
});
