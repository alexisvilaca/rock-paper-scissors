const results = document.querySelector(".results-text");
const resultsWinOrLose = document.querySelector(".results-win-or-lose");
const playerScoreEl = document.querySelector(".player-score-result");
const computerScoreEl = document.querySelector(".computer-score-result");
const handContainer = document.querySelector(".hand-container");
const retryContainer = document.querySelector(".retry-container");
const retryBtn = document.getElementById("retry");
let playerScore = 0;
let computerScore = 0;


// Randomly returns "Rock", "Paper" or "Scissors"
function getComputerChoice () {
    const handOptions = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*handOptions.length);
    return handOptions[randomNumber];
}

// Player Selection
const buttons = document.querySelectorAll("button");
buttons.forEach(item => {
    item.addEventListener("click", () => {
        playerSelection = item.id;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    })
})

// Play one round and return the result
function playRound (playerSelection, computerSelection) {

    if (playerScore < 5 && computerScore < 5) {
        // if playerSelection = computerSelection
        if (playerSelection === computerSelection) {
            playerScoreEl.textContent = playerScore;
            computerScoreEl.textContent = computerScore;
            resultsWinOrLose.textContent = " ";
            results.textContent = "It's a Draw!";
        // Rock vs Scissors
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore += 1;
            playerScoreEl.textContent = playerScore;
            computerScoreEl.textContent = computerScore;
                resultsWinOrLose.style.color = "#73C71F";
            resultsWinOrLose.textContent = "You Win! ";
            results.textContent = "Rock beats Scissors";
        // Rock vs Paper
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore += 1;
            playerScoreEl.textContent = playerScore;
            computerScoreEl.textContent = computerScore;
                resultsWinOrLose.style.color = "#DE3131";
            resultsWinOrLose.textContent = "You Lose! ";
            results.textContent = "Paper beats Rock";
        // Paper vs Rock
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore += 1;
            playerScoreEl.textContent = playerScore;
            computerScoreEl.textContent = computerScore;
                resultsWinOrLose.style.color = "#73C71F";
            resultsWinOrLose.textContent = "You Win! ";
            results.textContent = "Paper beats Rock";
        // Paper vs Scissors
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore += 1;
            playerScoreEl.textContent = playerScore;
            computerScoreEl.textContent = computerScore;
                resultsWinOrLose.style.color = "#DE3131";
            resultsWinOrLose.textContent = "You Lose! ";
            results.textContent = "Scissors beats Paper";
        // Scissors vs Rock
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore += 1;
            playerScoreEl.textContent = playerScore;
            computerScoreEl.textContent = computerScore;
                resultsWinOrLose.style.color = "#DE3131";
            resultsWinOrLose.textContent = "You Lose! ";
            results.textContent = "Rock beats Scissors";
        // Scissors vs Paper
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore += 1;
            playerScoreEl.textContent = playerScore;
            computerScoreEl.textContent = computerScore;
                resultsWinOrLose.style.color = "#73C71F";
            resultsWinOrLose.textContent = "You Win! ";
            results.textContent = "Scissors beats Paper";
        }
    }
    
    if (playerScore == 5) {
        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;
        resultsWinOrLose.textContent = " ";
        results.classList.add("results-win");
        results.textContent = "Congratulations, you won the game!";
        handContainer.style.display = "none";
        retryContainer.style.display = "flex";
    } else if (computerScore == 5) {
        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;
        resultsWinOrLose.textContent = " ";
        results.classList.add("results-lose");
        results.textContent = "You lost the game!";
        handContainer.style.display = "none";
        retryContainer.style.display = "flex";
    }
}

retry.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    retryContainer.style.display = "none";
    handContainer.style.display = "flex";
    results.classList.remove("results-win");
    results.classList.remove("results-lose");
    results.textContent = "Select a hand to start playing!";
});