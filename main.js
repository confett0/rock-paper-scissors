// Rock Paper Scissors with GUI

// Global variables

let computerScore = 0;
let playerScore = 0;

// Get computer choice

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor((Math.random() * choices.length))];
}

// Win round

function winRound(computerChoice, playerChoice) {

    if (computerChoice === playerChoice) {
        console.log("It's a tie");
    } else if (
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        console.log("You win this round!");
    } else {
        computerScore++;
        console.log("You lose this round!");
    }

}

// Play round 

function playRound(e) {
    let computerSelection = getComputerChoice();
    winRound(computerSelection, e.target.id);

}

// Get player choice 

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click',playRound);
paper.addEventListener('click',playRound);
scissors.addEventListener('click',playRound);




