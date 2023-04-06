//Create array of possible choices
const myArray = ["Rock", "Paper", "Scissors"];

//Create function to get computer's choice
function getComputerChoice() {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

let computerSelection = getComputerChoice();

//console.log(computerSelection, "-computerSelection");

//Get players's choice
let playerSelection = "Rock"; //prompt("Rock, paper, or scissors?");

//console.log(playerSelection, "-playerSelection");

//Create a function that plays a single round
//If player made the same choice as computer, then print "Draw"
//If player has rock and computer has scissors OR player has paper and computer has rock OR player has scissors and computer has paper, then print "You win"
//If it's the other way around, print "You lose"
function playRound(playerSelection, computerSelection) {
  let selection1 = playerSelection.toLowerCase();
  let selection2 = computerSelection.toLowerCase();

  console.log(selection1, selection2);

  if (selection1 === selection2) {
    return `Draw! Both chose ${selection1}.`;
  }
  else if (selection1 === "rock" && selection2 == "scissors" || selection1 == "paper" && selection2 == "rock" || selection1 == "scissors" && selection2 == "paper") {
    return `You win! ${selection1} beats ${selection2}.`;
  }
  else if (selection1 === "scissors" && selection2 == "rock" || selection1 == "rock" && selection2 == "paper" || selection1 == "paper" && selection2 == "scissors") {
    return `You lose! ${selection2} beats ${selection1}.`;
  } else {
    console.log("Error");
  }
}

console.log(playRound(playerSelection, computerSelection));
