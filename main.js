// Rock Paper Scissors

// Get computer choice

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor((Math.random() * 3))];
}

// Get player choice 



/*function getPlayerChoice() {
    let input = prompt("Choose Rock, Paper or Scissors!");
    return input = input.toLowerCase();
}*/

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click',playRound('rock');
paper.addEventListener('click',playRound('paper'));
scissors.addEventListener('click',playRound('scissors'));

// Win round

let computerScore = 0;
let playerScore = 0;

function winRound(computerChoice, playerChoice) {

    if (computerChoice === playerChoice) {
        return "It's a tie";
    } else if (
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "You lose this round!";
    }

}

// Play round 

function playRound() {

    let computerSelection = getComputerChoice();
    //let playerSelection = getPlayerChoice();
    let winner = winRound(computerSelection, playerSelection);
    console.log(`You played ${playerSelection}, computer played ${computerSelection}: ${winner}`);

}

// Play a game with 5 rounds and log final score

/*function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > playerScore) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }
    console.log(`Score: ${playerScore} - ${computerScore}`)
}*/

game();
