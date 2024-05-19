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

let humanScore = 0
let computerScore = 0

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
        computerScore++
        return "Computer wins!"
    }
}

function playGame() {

    function fullTurn() {
    humanSelection = getHumanChoice(prompt());
    computerSelection = getComputerChoice(3);
    console.log("Human chose: " + humanSelection)
    console.log("Computer chose: " + computerSelection)
    console.log(playRound(humanSelection,computerSelection))
    console.log("Human: " + humanScore + "; " + "Computer: " + computerScore)
    }
    
    //Repeat the round 5 times
    fullTurn()
    fullTurn()
    fullTurn()
    fullTurn()
    fullTurn()
    
    if (humanScore > computerScore) {
        console.log("Human has won the game!")
    } else if (humanScore == computerScore) {
        console.log("That's a draw!")
    } else {
        console.log("Computer has won the game!")
    }

}

playGame()

