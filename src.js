let humanScore = 0
let computerScore = 0

function getHumanChoice() {
    let choice = prompt("Enter 1 for Rock, 2 for Paper, 3 for Scissor (enter 4 to quit): ");
    return Number(choice)
}

function getComputerChoice() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

function compareChoice(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("Draw. Please reload the website to play again.")
    }
    else if (humanChoice === 1) {
        if (computerChoice === 3) {
            alert("Player Won")
        } 
        else {
            alert("Computer Won")
        }
    }
    else if (humanChoice === 2) {
        if (computerChoice === 1) {
            alert("Player Won")
            humanScore++
        } 
        else {
            alert("Computer Won")
            computerScore++
        }
    }
    else if (humanChoice === 3) {
        if (computerChoice === 2) {
            alert("Player Won")
            humanScore++
        } 
        else {
            alert("Computer Won")
            computerScore++
        }
    }
}

while(true) {
    let human = getHumanChoice()
    if(human === 4) {
        alert("Thanks for playing! Reload to play again")
        break
    }

    let computer = getComputerChoice()

    compareChoice(human, computer)

    if(humanScore === computerScore) {
        alert("Your score = Computer's score")
    }
    else if(humanScore > computerScore) {
        alert("Your score > Computer's score")
    }
    else {
        alert("Your score < Computer's score")
    }
}