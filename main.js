// Rock Paper Scissors with GUI

// Global variables and HTML elements

let computerScore = 0;
let playerScore = 0;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('results');

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
    console.log(playerScore);
    console.log(computerScore);
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

rock.addEventListener('click',playRound);
paper.addEventListener('click',playRound);
scissors.addEventListener('click',playRound);
