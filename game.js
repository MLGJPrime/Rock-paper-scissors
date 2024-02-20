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

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    divResult.textContent = roundResult;
    if (roundResult.includes("win")) {
        playerScore++;
    } else if (roundResult.includes("lose")) {
        computerScore++;
    }
    divScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    roundsPlayed++;
    if (roundsPlayed >= numRounds) {
        if (playerScore > computerScore) {
            divGame.textContent = "You win the game!";
        } else if (playerScore < computerScore) {
            divGame.textContent = "You lose the game!";
        } else {
            divGame.textContent = "It's a tie game!";
        }
        buttons.forEach(button => {
            const btn = document.querySelector(button.selector);
            btn.classList.add("hidden");
        });
    }
}

const computerSelection = getComputerChoice();

const btnStartGame = document.querySelector("#startGame");
const divResult = document.querySelector("#result");
const divScore = document.querySelector("#score");
const divGame = document.querySelector("#game");

const buttons = [
    { selector: "#btn1", value: "Rock" },
    { selector: "#btn2", value: "Paper" },
    { selector: "#btn3", value: "Scissors" },
];

buttons.forEach(button => {
    const btn = document.querySelector(button.selector);
    btn.addEventListener("click", () => {
        playGame(button.value);
    });
});

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let numRounds;

btnStartGame.addEventListener("click", () => {
    numRounds = document.querySelector("#numRounds").value;
    buttons.forEach(button => {
        const btn = document.querySelector(button.selector);
        btn.classList.remove("hidden");
    });
});