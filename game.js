const prompt = require("prompt-sync")();

function getComputerChoice() {
    let n = Math.random()*3;
      if (n < 1) {
        return "rock";
    } else if (n > 1 && n <= 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "rock")) {
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    } else {
        return "It's a tie! " + playerSelection + " ties with " + computerSelection + ".";
    }
}

let playerSelection = prompt("What is your pick? ");
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));