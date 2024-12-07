let humanScore = 0;
let computerScore = 0;

// Function randomizes a choice for the computer.
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

//Function gets human choice.
function getHumanChoice() {
    let playerInput = prompt("Please enter 'rock', 'paper' or 'scissors' to play.");
    playerInput = playerInput.toLowerCase();
    while (playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors") { //If input is invalid, try again.
        playerInput = prompt("Invalid Input. Please enter 'rock', 'paper' or 'scissors' to play.");
    }
    return playerInput;
}


function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let winner;

    if (humanChoice === computerChoice) {
        winner = "tie";
            calcScore(winner);
            notifyWinner(winner, computerChoice, humanChoice);
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            winner = "lose";
        }
        else {
            winner = "win";
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            winner = "lose";
        }
        else {
            winner = "win";
        }
    }
    else {
        if (computerChoice === "rock") {
            winner = "lose";
        }
        else {
            winner = "win";
        }
    }
    calcScore(winner);
    notifyWinner(winner, computerChoice, humanChoice);
}

function calcScore (winner) {
    if (winner === "win") {
        humanScore++;
    }
    else if (winner === "lose") {
        computerScore++;
    }
    return;
}

function notifyWinner (winner, computerChoice, humanChoice) {
    if (winner === "tie") {
        console.log(`It's a tie. Your score is ${humanScore} and the computer's score is ${computerScore}.`)
    }
    else if (winner === "lose") {
        console.log(`You have lost. ${computerChoice} beats ${humanChoice}, Your score is ${humanScore} and the computer's score is ${computerScore}.`)
    }
    else {
        console.log(`You have won! ${humanChoice} beats ${computerChoice}, Your score is ${humanScore} and the computer's score is ${computerScore}.`)
    }
}

console.log(playRound());