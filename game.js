function getComputerChoice() {
    let n = Math.random()*3;
    if (n < 1) {
        return "Rock";
    } else if (1 < n < 2) {
        return "Paper";
    } else
        return "Scissors";
}
