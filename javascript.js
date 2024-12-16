console.log(playGame());

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let winner;
    for (let i = 0; i < 5; i++) {
        winner = playRound(humanScore, computerScore);
        if (winner === "win") {
            humanScore++;
        }
        else if (winner === "lose") {
            computerScore++;
        }
        notifyRoundWinner(winner, humanScore, computerScore);
    }
    if (humanScore === computerScore) {
        alert(`It's a tie! you have both scored ${humanScore} points.`)
    }
    else if (humanScore > computerScore) {
        alert(`Congrats! you have won the game! The final score is ${humanScore}:${computerScore}.`)
    }
    else {
        alert(`Oh no, you have lost the game! The final score is ${humanScore}:${computerScore}.`)
    }
}

function playRound(humanScore, computerScore){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let winner;

    if (humanChoice === computerChoice) {
        winner = "tie";
    }
    else if (humanChoice === "rock" && computerChoice === "paper" ||
    humanChoice === "paper" && computerChoice === "scissors" ||
    humanChoice === "scissors" && computerChoice === "rock") {
        winner = "lose";
        }
    else {
        winner = "win";
    }
    
    return winner;
}

function getComputerChoice() {
    let randomValue = Math.random();
    if (randomValue < 0.33) {
        return "rock";
    }
    else if (randomValue < 0.67) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let playerInput = prompt("Please enter 'rock', 'paper' or 'scissors' to play.");
    playerInput = playerInput.toLowerCase();
    while (playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors") { //If input is invalid, try again.
        playerInput = prompt("Invalid Input. Please enter 'rock', 'paper' or 'scissors' to play.");
    }
    return playerInput;
}

function notifyRoundWinner (winner, humanScore, computerScore) {
    if (winner === "tie") {
        alert(`This round is a tie. The current score is ${humanScore}:${computerScore}.`)
    }
    else if (winner === "lose") {
        alert(`You have lost this round. The current score is ${humanScore}:${computerScore}.`)
    }
    else {
        alert(`You have won this round! The current score is ${humanScore}:${computerScore}.`)
    }
}