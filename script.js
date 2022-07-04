function computerSelection() {
    const options = ["Rock", "Paper", "Scissors"]
    const cInput = options[Math.floor(Math.random() * 3)]
    return cInput
}

function playerSelection() {
    let pInput = prompt("Play by entering Rock/Paper/Scissors")
    const pInput1 = pInput.substring(0,1).toUpperCase() + pInput.substring(1).toLowerCase()
    return pInput1
}

function playRound(computerSelection,playerSelection) {
    if (computerSelection==="Rock" && playerSelection==="Rock"
      ||computerSelection==="Paper" && playerSelection==="Paper"
      ||computerSelection==="Scissors" && playerSelection==="Scissors") {
        return "You Drew!"
    } else if (computerSelection==="Rock" && playerSelection==="Paper") {
        return "You Win! Paper beats Rock"
    } else if (computerSelection==="Rock" && playerSelection==="Scissors") {
        return "You Lose! Scissors beats Rock"
    } else if (computerSelection==="Paper" && playerSelection==="Rock") {
        return "You Lose! Paper beats Rock"
    } else if (computerSelection==="Paper" && playerSelection==="Scissors") {
        return "You Win! Scissors beats Paper"
    } else if (computerSelection==="Scissors" && playerSelection==="Rock") {
        return "You Win! Rock beats Scissors"
    } else if (computerSelection==="Scissors" && playerSelection==="Paper") {
        return "You Lose! Scissors beats Paper"
    } else {
        return "You Entered A Incorrect Value"
    }

}

function game() {
    let score = 0
    for (let i = 0; i < 5; i++) {
        const cs = computerSelection()
        const ps = playerSelection()
        console.log("The Computer Chose " + cs + " And You Chose " + ps)
        console.log(playRound(cs,ps))
        const pg = playRound(cs,ps)
        if (pg.substring(0,8) === "You Win!") {
            score = score + 1
        }
     }
    if (score > 2) {
        return "FINAL: YOU WIN!"
    } else {
        return "FINAL: YOU LOOSE!"
    }
}

console.log(game())

// const cs = computerSelection()
// const ps = playerSelection()
// console.log("The Computer Chose " + cs + " And You Chose " + ps)
// console.log(playRound(cs,ps))