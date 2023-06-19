const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector(".results");

rock.addEventListener("click", playRound("rock", getComputerChoice()));
paper.addEventListener("click", playRound("paper", getComputerChoice()));
scissors.addEventListener("click", playRound("scissors", getComputerChoice()));

function getComputerChoice() {
  console.log("function getComputerChoice started");
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

function getPlayerChoice() {
  console.log("function getPlayerChoice started");

};

function playRound(selection1, selection2) {
  if (selection1 === selection2) {
    results.textContent = (`Draw! Both chose ${selection1}.`);
  } else if (selection1 === "rock" && selection2 === "scissors" || selection1 === "paper" && selection2 === "rock" || selection1 === "scissors" && selection2 === "paper") {
    results.textContent = (`You win! ${selection1} beats ${selection2}.`);
    return "player";
  } else if (selection1 === "scissors" && selection2 === "rock" || selection1 === "rock" && selection2 === "paper" || selection1 === "paper" && selection2 === "scissors") {
    results.textContent = (`You lose! ${selection2} beats ${selection1}.`);
    return "computer";
  } else {
    console.log("Error");
  }
};

function game() {
  let playerScore = 0;
  let computerScore = 0;
  const numberOfRounds = 5;

  for (let i = 0; i < numberOfRounds; i++) {
    const oneRoundWinner = playRound(getPlayerChoice(), getComputerChoice());

    if (oneRoundWinner === "player") {
      playerScore++;
    } else if (oneRoundWinner === "computer") {
      computerScore++;
    } else {
      console.log("draw");
    }
  }

  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
  getGameWinner(playerScore, computerScore, numberOfRounds);
};

function getGameWinner(playerScore, computerScore, numberOfRounds) {
  if (playerScore > computerScore) {
    alert(`You won ${playerScore} rounds out of ${numberOfRounds}.`)
  } else if (computerScore > playerScore) {
    alert(`Computer won with ${computerScore} rounds out of ${numberOfRounds}.`)
  } else {
    alert(`Draw! Both won ${playerScore} rounds.`)
  }
};

//game();
