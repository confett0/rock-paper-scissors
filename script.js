// Rock Paper Scissors

// Get computer choice from array and store in a variable

let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {

    return choices[Math.floor((Math.random() * 3))];
}

const computerSelection = getComputerChoice();

// Play a round 

function playRound(playerSelection, computerSelection) {

    if (computerSelection === 'Rock') {

        if (playerSelection == 'Rock') {
            return "It's tie! Rock ties with rock.";
        } else if (playerSelection == 'Paper') {
            return "You win! Paper beats rock.";
        } else if (playerSelection == 'Scissors') {
            return "You lose! Rock beats scissors.";
        }

    } else if (computerSelection === 'Paper') {

        if (playerSelection == 'Rock') {
            return "You lose! Paper beats rock.";
        } else if (playerSelection == 'Paper') {
            return "It's tie! Paper ties with paper.";
        } else if (playerSelection == 'Scissors') {
            return "You win! Scissors beats paper.";
        }

    } else if (computerSelection === 'Scissors') {

        if (playerSelection == 'Rock') {
            return "You win! Rock beats scissors.";
        } else if (playerSelection == 'Paper') {
            return "You lose! Scissors beats paper.";
        } else if (playerSelection == 'Scissors') {
            return "It's a tie! Scissors ties with scissors.";
        }

    }

}

const playerSelection = "Rock";
//const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));