
// Randomly returns "Rock", "Paper" or "Scissors"
function getComputerChoice () {
    const handOptions = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random()*handOptions.length);
    return handOptions[randomNumber];
}


// Player inputs hand to play
function getPlayerChoice () {
    let playerSelection = prompt("Chose your hand");
    return playerSelection;
}


// Play one round and return the result
function playRound (playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // if playerSelection = computerSelection
    if (playerSelection === computerSelection) {
        return "It's a Draw!";
    // Rock vs Scissors
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    // Rock vs Paper
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    // Paper vs Rock
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    // Paper vs Scissors
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    // Scissors vs Rock
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    // Scissors vs Paper
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    // if player types a wrong hand
    } else {
        return "Not a valid hand";
    }
}


// Game
function game () {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice().toLocaleLowerCase();
        let computerSelection = getComputerChoice().toLocaleLowerCase();
        console.log(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));

        // Score track
        if (playerSelection === computerSelection) {
            console.log(`You: ${playerScore}, Computer: ${computerScore}`);
        } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore += 1;
            console.log(`You: ${playerScore}, Computer: ${computerScore}`);
        } else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")) {
            computerScore += 1;
            console.log(`You: ${playerScore}, Computer: ${computerScore}`);
        } else {
            console.log(`You: ${playerScore}, Computer: ${computerScore}`);
        }
    }

    // Check player and computer scores and display message
    if (playerScore > computerScore) {
        console.log("You won, congratulations!");
    } else if (playerScore === computerScore) {
        console.log("That was a tie!");
    } else {
        console.log("You lost, try again!");
    }
}

game();
