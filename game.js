function getComputerChoice() {
    let n = Math.random()*3;
    if (n < 1) {
        return "Rock";
    } else if (1 < n <= 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if ((computerSelection === "Rock" && playerSelection === "Scissors") || (computerSelection === "Scissors" && playerSelection === "Paper") || (computerSelection === "Paper" || playerSelection === "Rock")) {
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Paper" || computerSelection === "Rock")) {
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    } else {
        return "It's a tie! " + playerSelection + " ties with " + computerSelection + ".";
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));