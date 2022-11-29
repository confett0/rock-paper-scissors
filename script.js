// Rock Paper Scissors

// Get computer choice from array and store in a variable

let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {

    return choices[Math.floor((Math.random() * 3))];
}

let computerSelection = getComputerChoice();
let playerSelection;


// Play a round 

let playerScore = 0;
let computerScore = 0;

function playRound() {

    if (computerSelection == 'rock') {

        if (playerSelection == 'rock') {
            return "It's a tie! Rock ties with rock.";
        } else if (playerSelection == 'paper') {
            playerScore++;
            return "You win! Paper beats rock.";
        } else if (playerSelection == 'scissors') {
            computerScore++;
            return "You lose! Rock beat scissors.";
        }

    } else if (computerSelection == 'paper') {

        if (playerSelection == 'rock') {
            computerScore++;
            return "You lose! Paper beats rock.";
        } else if (playerSelection == 'paper') {
            return "It's tie! Paper ties with paper.";
        } else if (playerSelection == 'scissors') {
            playerScore++;
            return "You win! Scissors beat paper.";
        }

    } else if (computerSelection == 'scissors') {

        if (playerSelection == 'rock') {
            playerScore++;
            return "You win! Rock beats scissors.";
        } else if (playerSelection == 'paper') {
            computerScore++;
            return "You lose! Scissors beat paper.";
        } else if (playerSelection == 'scissors') {
            return "It's a tie! Scissors ties with scissors.";
        }

    }

}

// Play 5 rounds and end game

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose Rock, Paper or Scissors!", "");
        playRound();
        console.log(playRound(playerSelection, computerSelection));
    }

   /* if (playerScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > playerScore) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }*/
}

game();



console.log(playerScore);
console.log(computerScore);