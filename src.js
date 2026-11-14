let humanScore = 0
let computerScore = 0

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', function() {
        let choice = 0;
        switch(button.id) {
            case "rock":
                choice = 1;
                break;
            case "paper":
                choice = 2;
                break;
            case "scissor":
                choice = 3;
                break;
        }
        Play(choice);
    });
});


function getComputerChoice() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

function compareChoice(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("Draw. Please reload the website to play again.")
    }
    else if (humanChoice === 1) {
        if (computerChoice === 3) {
            alert("Player Won");
            humanScore++;
        } 
        else {
            alert("Computer Won")
            computerScore++;
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

function Play(human) {

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

