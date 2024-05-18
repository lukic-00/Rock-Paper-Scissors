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
let humanSelection = getHumanChoice(prompt());
let computerSelection = getComputerChoice(3);



let humanScore = 0
let commputerScore = 0

console.log("Human chose: " + humanSelection)
console.log("Computer chose: " + computerSelection)




function playRound(humanChoice,computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Scissors" ||
        humanChoice == "Paper" && computerChoice == "Rock" ||
        humanChoice == "Scissors" && computerChoice == "Paper") {
        ++humanScore
        return "Human wins!"
    } else if (humanChoice == "Rock" && computerChoice == "Scissors" ||
        humanChoice == "Rock" && computerChoice == "Rock" ||
        humanChoice == "Paper" && computerChoice == "Paper" ||
        humanChoice == "Scissors" && computerChoice == "Scissors") {
            return "Draw!"
    } else {
        ++commputerScore
        return "Computer wins!"
    }
}

console.log(playRound(humanSelection,computerSelection))
console.log(humanScore)
console.log(commputerScore)

