console.log(playGame());

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const MAX_SCORE = 5;

    const choice = document.querySelector("#selection");
    choice.addEventListener("click", (event) => {
        const humanChoice = event.target.id
        console.log(`human choice: ${humanChoice}`);

        if (humanScore < MAX_SCORE && computerScore < MAX_SCORE && humanChoice !== "selection") {playRound(humanChoice);}
    });

    function playRound(humanChoice){
        const computerChoice = getComputerChoice();
        console.log(`computer choice: ${computerChoice}`);
        const roundBoard = document.querySelector("#currentRound");

        if (humanChoice === computerChoice) {
            roundBoard.textContent = `This round is a tie. You both chose ${humanChoice}.`;
        }
        else if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock") { //player loses
            roundBoard.textContent = `You lost this round. ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        }
        else { //player wins
            roundBoard.textContent = `You won this round! ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
        }
        console.log(`human score: ${humanScore}`);
        console.log(`computer score: ${computerScore}`);

        publishResults(humanScore, computerScore)

        if (humanScore === MAX_SCORE || computerScore === MAX_SCORE) {displayWinner(humanScore, computerScore)}
    }  
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

function publishResults (humanScore, computerScore) {
    const humanScoreBoard = document.querySelector("#humanScore");
    const computerScoreBoard = document.querySelector("#computerScore");
    
    humanScoreBoard.textContent = `Player score: ${humanScore}`;
    computerScoreBoard.textContent = `Computer score: ${computerScore}`;
}

function displayWinner (humanScore, computerScore) {
    const endMessageBoard = document.querySelector("#endMessage");
    
    if (humanScore > computerScore) {
        endMessageBoard.textContent = `Congratulations, You won this game! Reload page to play again.`;
    }
    else {
        endMessageBoard.textContent = `Too bad, you lost this time! Reload page to play again.`;
    }
}