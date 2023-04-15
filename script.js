function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

function getPlayerChoice() {
  const playerChoice = prompt("Rock, paper or scissors?");
  return playerChoice;
};

function playRound(playerSelection, computerSelection) {
  let selection1 = playerSelection.toLowerCase();
  let selection2 = computerSelection.toLowerCase();

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

function game() {
  //Save results into array - console.log it
  //Get most frequent result - console.log it and then return it
  //const results = [

  for (let i = 0; i < 2; i++) {
    playRound(getPlayerChoice(), getComputerChoice());

    // Push results into result array
  }

  // Console log result, return result
  //return
};
