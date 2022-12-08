// Rock Paper Scissors with GUI

// Global variables and HTML elements

let computerScore = 0;
let playerScore = 0;
let currentlyPlaying = true;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('results');
const startButton = document.getElementById('start');

// Get computer choice

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor((Math.random() * choices.length))];
}

// Play round 

function playRound(e) {
    const computerSelection = getComputerChoice();
    const playerSelection = e.target.id;
    winRound(computerSelection, playerSelection);
    if (playerScore === 5) {
        gameOver('win');
    } else if (computerScore === 5) {
        gameOver();
    }
}

// Win round

function winRound(computerChoice, playerChoice) {

    if (computerChoice === 'rock') {
        if (playerChoice === 'rock') {
            console.log(`Computer chose ${computerChoice}: it's a tie!`);
        } else if (playerChoice === 'paper') {
            playerScore++;
            console.log(`Computer chose ${computerChoice}: you win!`);
        } else {
            computerScore++;
            console.log(`Computer chose ${computerChoice}: you lose!`);
        }
    } else if (computerChoice === 'paper') {
        if (playerChoice === 'rock') {
            computerScore++;
            console.log(`Computer chose ${computerChoice}: you lose!`);
        } else if (playerChoice === 'paper') {
            console.log(`Computer chose ${computerChoice}: it's a tie!`);
        } else {
            playerScore++;
            console.log(`Computer chose ${computerChoice}: you win!`);
        }
    } else {
        if (playerChoice === 'rock') {
            playerScore++;
            console.log(`Computer chose ${computerChoice}: you win!`);
        } else if (playerChoice === 'paper') {
            computerScore++;
            console.log(`Computer chose ${computerChoice}: you lose!`);
        } else {
            console.log(`Computer chose ${computerChoice}: it's a tie!`);
        }
    }
}

// Get player choice  

rock.onclick = (e) => {
    if (currentlyPlaying) {
        playRound(e);
    }
};
paper.onclick = (e) => {
    if (currentlyPlaying) {
        playRound(e);
    }
};
scissors.onclick = (e) => {
    if (currentlyPlaying) {
        playRound(e);
    }
};

startButton.onclick = () => {
    if (!currentlyPlaying) {
      startOver();
    }
  };

function startOver() {
    computerScore = 0;
    playerScore = 0;
    currentlyPlaying = true;
    startButton.innerText = "Good luck!"
    getComputerChoice();
}

function gameOver(status) {
    if (status === 'win') {
        console.log("You won the game!")
    } else {
        console.log("You lost the game!")
    }
    currentlyPlaying = false;
    startButton.innerText = "Play again?"
}

startOver();

// log results in document div instead of console