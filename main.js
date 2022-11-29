// Rock Paper Scissors

// Get computer choice

let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {

    return choices[Math.floor((Math.random() * 3))];
}


// Get player choice 


function getPlayerChoice() {
    let input = prompt("Choose Rock, Paper or Scissors!");
    return input = input.toLowerCase();
}


// Win round

function winRound(computerChoice, playerChoice) {

    if (computerChoice === playerChoice) {
        return "It's a tie";
    } else if (
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
        return "You win!";
    } else {
        return "You lose!";
    }

}

// Play round 

function playRound() {

    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    let winner = winRound(computerSelection, playerSelection);
    console.log(`You played ${playerSelection}, computer played ${computerSelection}: ${winner}`);

}

// Play a game with 5 rounds

function game() {
    for (let i = 0; i < 5; i++) {
    playRound();
}
}

game();
