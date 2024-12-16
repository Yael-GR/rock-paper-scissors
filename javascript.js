console.log(playGame());

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    const choice = document.querySelector("#selection");
    choice.addEventListener("click", (event) => {
        const humanChoice = event.target.id
        console.log(`human choice: ${humanChoice}`);

        if (round < 5) {playRound(humanChoice);}
    });

    function playRound(humanChoice){
        let computerChoice = getComputerChoice();
        console.log(`computer choice: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            //if they choose the same thing, don't do anything.
        }
        else if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock") { //computer wins
            computerScore++;
        }
        else { //player wins
            humanScore++;
        }
        console.log(`human score: ${humanScore}`);
        console.log(`computer score: ${computerScore}`);

        round++;
        console.log(`round number: ${round}`);

        if (round === 5) {notifyGameWinner(humanScore, computerScore);}
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