function getComputerChoice(x) {
    let computerPick = Math.floor(Math.random() * x);
    if (computerPick == 0) {
        return "Rock"
    } else if (computerPick == 1) {
        return "Paper"
    } else {
        return "Scissors"
    }

}

function getHumanChoice(y) {
    y = y.toLowerCase();
    if (y == "rock") {
        return "Rock"
    } else if (y == "paper") {
        return "Paper"
    } else if (y == "scissors") {
        return "Scissors"
    } else {
        return "Invalid choice"
    }
}

function playGame() {
    let humanScore = 0
    let commputerScore = 0
    let humanSelection = getHumanChoice(prompt());
    let computerSelection = getComputerChoice(3);
    function playRound(humanSelection,computerSelection) {
        if (humanSelection == "Rock" && computerSelection == "Scissors" ||
            humanSelection == "Paper" && computerSelection == "Rock" ||
            humanSelection == "Scissors" && computerSelection == "Paper") {
            humanScore++
            return "Human wins!"
        } else if (humanSelection == "Rock" && computerSelection == "Scissors" ||
            humanSelection == "Rock" && computerSelection == "Rock" ||
            humanSelection == "Paper" && computerSelection == "Paper" ||
            humanSelection == "Scissors" && computerSelection == "Scissors") {
                return "Draw!"
        } else {
            commputerScore++
            return "Computer wins!"
        }
    }
    console.log("Human chose: " + humanSelection)
    console.log("Computer chose: " + computerSelection)
    playRound(humanSelection,computerSelection)
    console.log(playRound(humanSelection,computerSelection))
    console.log(humanScore)
    console.log(commputerScore)

    humanSelection = getHumanChoice(prompt());
    computerSelection = getComputerChoice(3);
    console.log("Human chose: " + humanSelection)
    console.log("Computer chose: " + computerSelection)
    playRound(humanSelection,computerSelection)
    console.log(playRound(humanSelection,computerSelection))
    console.log(humanScore)
    console.log(commputerScore)

    humanSelection = getHumanChoice(prompt());
    computerSelection = getComputerChoice(3);
    console.log("Human chose: " + humanSelection)
    console.log("Computer chose: " + computerSelection)
    playRound(humanSelection,computerSelection)
    console.log(playRound(humanSelection,computerSelection))
    console.log(humanScore)
    console.log(commputerScore)
    
    humanSelection = getHumanChoice(prompt());
    computerSelection = getComputerChoice(3);
    console.log("Human chose: " + humanSelection)
    console.log("Computer chose: " + computerSelection)
    playRound(humanSelection,computerSelection)
    console.log(playRound(humanSelection,computerSelection))
    console.log(humanScore)
    console.log(commputerScore)

    humanSelection = getHumanChoice(prompt());
    computerSelection = getComputerChoice(3);
    console.log("Human chose: " + humanSelection)
    console.log("Computer chose: " + computerSelection)
    playRound(humanSelection,computerSelection)
    console.log(playRound(humanSelection,computerSelection))
    console.log(humanScore)
    console.log(commputerScore)

    if (humanScore > commputerScore) {
        console.log("Human has won the game!")
    } else if (humanScore == commputerScore) {
        console.log("That's a draw!")
    } else {
        console.log("Computer has won the game!")
    }

}

playGame()

