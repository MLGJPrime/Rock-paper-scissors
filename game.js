function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! ${playerSelection} ties with ${computerSelection}.`;
    }

    const winConditions = {
        Rock: 'Scissors',
        Paper: 'Rock',
        Scissors: 'Paper'
    };

    if (winConditions[playerSelection] === computerSelection) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// function playGame(numRounds) {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < numRounds; i++) {
//         let playerSelection = prompt("What is your pick? ");
//         playerSelection = playerSelection.toLowerCase();
//         const computerSelection = getComputerChoice();
//         const roundResult = playRound(playerSelection, computerSelection);
//         console.log(roundResult);
//         if (roundResult.includes("win")) {
//             playerScore++;
//         } else if (roundResult.includes("lose")) {
//             computerScore++;
//         }
//     }
//     if (playerScore > computerScore) {
//         console.log("You win the game!");
//     } else if (playerScore < computerScore) {
//         console.log("You lose the game!");
//     } else {
//         console.log("It's a tie game!");
//     }
// }

const buttons = [
    { selector: "#btn1", value: "Rock" },
    { selector: "#btn2", value: "Paper" },
    { selector: "#btn3", value: "Scissors" },
];

const computerSelection = getComputerChoice();

const div = document.querySelector("#result");

buttons.forEach(button => {
    const btn = document.querySelector(button.selector);
    btn.addEventListener("click", () => {
        const playerSelection = button.value;
        const roundResult = playRound(playerSelection, computerSelection);
        div.textContent = roundResult;
    });
});


// let numRounds = prompt("How many rounds do you want to play? ");
// playGame(numRounds);