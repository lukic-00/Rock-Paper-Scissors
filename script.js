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

const rockButton = document.querySelector(".rockButton")
const paperButton = document.querySelector(".paperButton")
const scissorsButton = document.querySelector(".scissorsButton")
const optionsContainer = document.querySelector(".optionsContainer")

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

let roundsPlayed = 0;
let matchesWonbyHuman = 0
let matchesWonbyComputer = 0

function playGame() {

    function fullTurn() {

    rockButton.addEventListener("click", () => {
        const humanSelection = "Rock"
        const computerSelection = getComputerChoice(3);
        console.log("Human chose: " + humanSelection)
        console.log("Computer chose: " + computerSelection)
        console.log(playRound(humanSelection, computerSelection))
        console.log("Human: " + humanScore + "; " + "Computer: " + computerScore)
        roundsPlayed++
        console.log(roundsPlayed)
        endMatch()
    })

    paperButton.addEventListener("click", () => {
        const humanSelection = "Paper"
        const computerSelection = getComputerChoice(3);
        console.log("Human chose: " + humanSelection)
        console.log("Computer chose: " + computerSelection)
        console.log(playRound(humanSelection, computerSelection))
        console.log("Human: " + humanScore + "; " + "Computer: " + computerScore)
        roundsPlayed++
        console.log(roundsPlayed)
        endMatch()
    } )

    scissorsButton.addEventListener("click", () => {
        const humanSelection = "Scissors"
        const computerSelection = getComputerChoice(3);
        console.log("Human chose: " + humanSelection)
        console.log("Computer chose: " + computerSelection)
        console.log(playRound(humanSelection, computerSelection))
        console.log("Human: " + humanScore + "; " + "Computer: " + computerScore)
        roundsPlayed++
        console.log(roundsPlayed)
        endMatch()
    } )
    }  
    fullTurn()
}

const para = document.createElement("p")

function endMatch(){
    let finalResult;
    let everyFiveRounds = roundsPlayed % 5
    if(everyFiveRounds == 0){     
        if(humanScore > computerScore){
            finalResult = "Human has won the game!"
            matchesWonbyHuman++
            //alert(finalResult)
            para.textContent = "Human has won the game!"
            optionsContainer.appendChild(para)
        } else if(humanScore < computerScore){
            finalResult = "Computer has won the game!"
            matchesWonbyComputer++
            //alert(finalResult)
            para.textContent = "Computer has won the game!"
            optionsContainer.appendChild(para)
        } else {
            finalResult = "Draw!"
            //alert(finalResult)
            para.textContent = "Draw!"
            optionsContainer.appendChild(para)
        }
        humanScore = 0;
        computerScore = 0;
    }
    if(everyFiveRounds != 0){
        optionsContainer.removeChild(para)
    }
    
}
playGame()
