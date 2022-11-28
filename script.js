// Rock Paper Scissors

// Get computer choice from array and store in a variable

let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {

    return choices[Math.floor((Math.random() * 3))];
}

const computerSelection = getComputerChoice();