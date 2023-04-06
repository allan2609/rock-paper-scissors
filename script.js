//Create array of possible choices
const myArray = ["Rock", "Paper", "Scissors"];

//Create function to get computer's choice
function getComputerChoice() {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

let computerSelection = getComputerChoice();

console.log(computerSelection);

//Get players's choice
let playerSelection = prompt("Rock, paper, or scissors?");

//Create a function that plays a single round
//If player made the same choice as computer, then print "Draw"
//If player has rock and computer has scissors OR player has paper and computer has rock OR player has scissors and computer has paper, then print "You win"
//If it's the other way around, print "You lose"
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Draw! Both chose ${playerSelection}.`;
  }
  else if (playerSelection === "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }
  else if (playerSelection === "Scissors" && computerSelection == "Rock" || playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors") {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

alert(playRound(Rock, Paper));
