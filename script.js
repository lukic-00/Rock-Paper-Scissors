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
            humanScore = humanScore + 1;
            return "Human wins!"
        } else if (humanSelection == "Rock" && computerSelection == "Scissors" ||
            humanSelection == "Rock" && computerSelection == "Rock" ||
            humanSelection == "Paper" && computerSelection == "Paper" ||
            humanSelection == "Scissors" && computerSelection == "Scissors") {
                return "Draw!"
        } else {
            commputerScore = commputerScore + 1;
            return "Computer wins!"
        }
    }
    console.log("Human chose: " + humanSelection)
    console.log("Computer chose: " + computerSelection)
    playRound(humanSelection,computerSelection)
    console.log(playRound(humanSelection,computerSelection))
    console.log(humanScore)
    console.log(commputerScore)

    let humanSelection2 = getHumanChoice(prompt());
    let computerSelection2 = getComputerChoice(3);
    console.log("Human chose: " + humanSelection2)
    console.log("Computer chose: " + computerSelection2)
    playRound(humanSelection2,computerSelection2)
    console.log(playRound(humanSelection2,computerSelection2))
    console.log(humanScore)
    console.log(commputerScore)

    let humanSelection3 = getHumanChoice(prompt());
    let computerSelection3 = getComputerChoice(3);
    console.log("Human chose: " + humanSelection3)
    console.log("Computer chose: " + computerSelection3)
    playRound(humanSelection3,computerSelection3)
    console.log(playRound(humanSelection3,computerSelection3))
    console.log(humanScore)
    console.log(commputerScore)

    let humanSelection4 = getHumanChoice(prompt());
    let computerSelection4 = getComputerChoice(3);
    console.log("Human chose: " + humanSelection4)
    console.log("Computer chose: " + computerSelection4)
    playRound(humanSelection4,computerSelection4)
    console.log(playRound(humanSelection4,computerSelection4))
    console.log(humanScore)
    console.log(commputerScore)

    let humanSelection5 = getHumanChoice(prompt());
    let computerSelection5 = getComputerChoice(3);
    console.log("Human chose: " + humanSelection5)
    console.log("Computer chose: " + computerSelection5)
    playRound(humanSelection5,computerSelection5)
    console.log(playRound(humanSelection5,computerSelection5))
    console.log(humanScore)
    console.log(commputerScore)
}

playGame()

