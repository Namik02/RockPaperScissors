function computerSelection() {
    const options = ["Rock", "Paper", "Scissors"]
    let cInput = options[Math.floor(Math.random() * 3)]
    cInput.toLowerCase
    return cInput
}

function playerSelection() {
    let pInput = prompt("Play by entering Rock/Paper/Scissors")
    pInput.toLowerCase
    return pInput
}



