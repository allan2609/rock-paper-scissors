const myArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return myArray[Math.floor(Math.random() * myArray.length)];
};

function getPlayerChoice() {
  return "Rock";
};

function playRound(playerSelection, computerSelection) {
  let selection1 = playerSelection.toLowerCase();
  let selection2 = computerSelection.toLowerCase();

  console.log(selection1, selection2);

  if (selection1 === selection2) {
    console.log(`Draw! Both chose ${selection1}.`);
  }
  else if (selection1 === "rock" && selection2 === "scissors" || selection1 === "paper" && selection2 === "rock" || selection1 === "scissors" && selection2 === "paper") {
    console.log(`You win! ${selection1} beats ${selection2}.`);
  }
  else if (selection1 === "scissors" && selection2 === "rock" || selection1 === "rock" && selection2 === "paper" || selection1 === "paper" && selection2 === "scissors") {
    console.log(`You lose! ${selection2} beats ${selection1}.`);
  } else {
    console.log("Error");
  }
};

console.log(playRound(getPlayerChoice(), getComputerChoice()));

//Display the results of each round
//Display the winner at the end.
function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, getComputerChoice());
  }
};
