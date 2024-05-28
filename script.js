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
const outputContainer = document.querySelector(".outputContainer")
const resultContainer = document.querySelector(".resultContainer")

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

const outPara = document.createElement("p")

function playGame() {

    function fullTurn() {

    rockButton.addEventListener("click", () => {
        const humanSelection = "Rock"
        const computerSelection = getComputerChoice(3);
        console.log(playRound(humanSelection, computerSelection))
        outPara.textContent = "Computer chose " + computerSelection + " | You chose " + humanSelection
        outputContainer.appendChild(outPara)
        console.log("Human: " + humanScore + "; " + "Computer: " + computerScore)
        roundsPlayed++
        console.log(roundsPlayed)
        endMatch()
    })

    paperButton.addEventListener("click", () => {
        const humanSelection = "Paper"
        const computerSelection = getComputerChoice(3);
        console.log(playRound(humanSelection, computerSelection))
        outPara.textContent = "Computer chose " + computerSelection + " | You chose " + humanSelection
        outputContainer.appendChild(outPara)
        console.log("Human: " + humanScore + "; " + "Computer: " + computerScore)
        roundsPlayed++
        console.log(roundsPlayed)
        endMatch()
    } )

    scissorsButton.addEventListener("click", () => {
        const humanSelection = "Scissors"
        const computerSelection = getComputerChoice(3);
        console.log(playRound(humanSelection, computerSelection))
        outPara.textContent = "Computer chose " + computerSelection + " | You chose " + humanSelection
        outputContainer.appendChild(outPara)
        console.log("Human: " + humanScore + "; " + "Computer: " + computerScore)
        roundsPlayed++
        console.log(roundsPlayed)
        endMatch()
    } )
    }  
    fullTurn()
}

const para = document.createElement("p")
para.classList.add("result")


function endMatch(){
    let finalResult;
    let everyFiveRounds = roundsPlayed % 5
    if(everyFiveRounds == 0){     
        if(humanScore > computerScore){
            finalResult = "Human has won the game!"
            matchesWonbyHuman++
            para.textContent = "Human has won the game!"
            resultContainer.appendChild(para)
            outPara.textContent = ""
        } else if(humanScore < computerScore){
            finalResult = "Computer has won the game!"
            matchesWonbyComputer++
            para.textContent = "Computer has won the game!"
            resultContainer.appendChild(para)
            outPara.textContent = ""
        } else {
            finalResult = "Draw!"
            para.textContent = "Draw!"
            resultContainer.appendChild(para)
            outPara.textContent = ""

        }
        humanScore = 0;
        computerScore = 0;
    }
    if(everyFiveRounds != 0){
        para.textContent = ""
    }
    
}
playGame()
