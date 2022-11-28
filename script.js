// Rock Paper Scissors

// Get computer choice from array and store in a variable

let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {

    return choices[Math.floor((Math.random() * 3))];
}

const computerSelection = getComputerChoice();

// Play a round 

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    if (computerSelection === 'Rock') {

        if (playerSelection == 'Rock') {
            return "It's a tie! Rock ties with rock.";
        } else if (playerSelection == 'Paper') {
            playerScore++;
            return "You win!";
        } else if (playerSelection == 'Scissors') {
            computerScore++;
            return "You lose!";
        }

    } else if (computerSelection === 'Paper') {

        if (playerSelection == 'Rock') {
            computerScore++;
            return "You lose!";
        } else if (playerSelection == 'Paper') {
            return "It's tie! Paper ties with paper.";
        } else if (playerSelection == 'Scissors') {
            playerScore++;
            return "You win!";
        }

    } else if (computerSelection === 'Scissors') {

        if (playerSelection == 'Rock') {
            playerScore++;
            return "You win!";
        } else if (playerSelection == 'Paper') {
            computerScore++;
            return "You lose!";
        } else if (playerSelection == 'Scissors') {
            return "It's a tie! Scissors ties with scissors.";
        }

    }

}

const playerSelection = "Rock";
//const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// Keep score



/*function game() {

    if (playRound((playerSelection, computerSelection)) === "You win!") {
        return playerScore += 1;
    } else if (playRound((playerSelection, computerSelection)) === "You lose!") {
        return computerScore += 1;
    }

}*/

console.log(playerScore);
console.log(computerScore);
