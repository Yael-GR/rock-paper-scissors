console.log(playGame());

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    const choice = document.querySelector("#selection");
    choice.addEventListener("click", (event) => {
        const humanChoice = event.target.id
        console.log(`human choice: ${humanChoice}`);

        if (round < 5 && humanChoice !== "selection") {playRound(humanChoice);}
    });

    function playRound(humanChoice){
        const computerChoice = getComputerChoice();
        console.log(`computer choice: ${computerChoice}`);
        const currentRoundBoard = document.querySelector("#currentRound");

        if (humanChoice === computerChoice) {
            currentRoundBoard.textContent = "This round was a tie!"
        }
        else if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock") { //player loses
            currentRoundBoard.textContent = "You lost this round"
            computerScore++;
        }
        else { //player wins
            currentRoundBoard.textContent = "You won this round!"
            humanScore++;
        }
        console.log(`human score: ${humanScore}`);
        console.log(`computer score: ${computerScore}`);

        round++;
        console.log(`round number: ${round}`);

        publishResults(humanScore, computerScore, humanChoice, computerChoice, round)

        if (round === 5) {displayWinner(humanScore, computerScore)}
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

function publishResults (humanScore, computerScore, humanChoice, computerChoice, round) {
    const humanScoreBoard = document.querySelector("#humanScore");
    const computerScoreBoard = document.querySelector("#computerScore");
    const roundBoard = document.querySelector("#round");
    const humanChoiceBoard = document.querySelector("#humanChoice");
    const computerChoiceBoard = document.querySelector("#computerChoice");

    humanScoreBoard.textContent = `Your score is: ${humanScore}`;
    computerScoreBoard.textContent = `Computer score is: ${computerScore}`;
    humanChoiceBoard.textContent = `Your choice is: ${humanChoice}`;
    computerChoiceBoard.textContent = `Computer choice is: ${computerChoice}`;
    roundBoard.textContent = `You have played ${round} rounds`;
}

function displayWinner (humanScore, computerScore) {
    if (humanScore === computerScore) {
        alert(`You have tied! Both you and the computer have won ${humanScore} rounds.`)
    }
    else if (humanScore > computerScore) {
        alert(`You have won! You won ${humanScore} rounds, well the computer won ${computerScore}!`);
    }
    else {
        alert(`You have lost! You won ${humanScore} rounds, well the computer won ${computerScore}.`)
    }
}