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
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const playerMove = document.getElementById('player-move');
const computerMove = document.getElementById('computer-move');

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
        computerMove.src = "./images/move-rock.png";
        if (playerChoice === 'rock') {
            playerMove.src = "./images/move-rock.png";
            result.innerText = `Computer chose ${computerChoice}: it's a tie!`;
        } else if (playerChoice === 'paper') {
            playerMove.src = "./images/move-paper.png";
            playerScore++;
            result.innerText = `Computer chose ${computerChoice}: you win!`;
        } else {
            playerMove.src = "./images/move-scissors.png";
            computerScore++;
            computerScoreDisplay.innerText = computerScore;
            playerScoreDisplay.innerText = playerScore;
            result.innerText = `Computer chose ${computerChoice}: you lose!`;
        }
    } else if (computerChoice === 'paper') {
        computerMove.src = "./images/move-paper.png";
        if (playerChoice === 'rock') {
            playerMove.src = "./images/move-rock.png";
            computerScore++;
            computerScoreDisplay.innerText = computerScore;
            result.innerText = `Computer chose ${computerChoice}: you lose!`;
        } else if (playerChoice === 'paper') {
            playerMove.src = "./images/move-paper.png";
            result.innerText = `Computer chose ${computerChoice}: it's a tie!`;
        } else {
            playerMove.src = "./images/move-scissors.png";
            playerScore++;
            playerScoreDisplay.innerText = playerScore;
            result.innerText = `Computer chose ${computerChoice}: you win!`;
        }
    } else {
        computerMove.src = "./images/move-scissors.png";
        if (playerChoice === 'rock') {
            playerMove.src = "./images/move-rock.png";
            playerScore++;
            playerScoreDisplay.innerText = playerScore;
            result.innerText = `Computer chose ${computerChoice}: you win!`;
        } else if (playerChoice === 'paper') {
            playerMove.src = "./images/move-paper.png";
            computerScore++;
            computerScoreDisplay.innerText = computerScore;
            result.innerText = `Computer chose ${computerChoice}: you lose!`;
        } else {
            playerMove.src = "./images/move-scissors.png";
            result.innerText = `Computer chose ${computerChoice}: it's a tie!`;
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
    playerScoreDisplay.innerText = 0;
    computerScoreDisplay.innerText = 0;
    result.innerText = "Make your move!"
    startButton.innerText = "Good luck!"
    // reset move images
    getComputerChoice();
}

function gameOver(status) {
    if (status === 'win') {
        result.innerText = "You won the game!"
    } else {
        result.innerText = "You lost the game!"
    }
    currentlyPlaying = false;
    startButton.innerText = "Play again?"
}

startOver();