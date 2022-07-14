let ps = ""
let cs = ""
let result = ""
let score = 0
let gamesPlayed = 0
let gameResultText = 0

const container = document.querySelector('#container');
const results = document.querySelector('#results');
// const roundText = document.createElement('p');
// roundText.classList.add('roundText')



function computerSelection() {
    const options = ["Rock", "Paper", "Scissors"]
    const cInput = options[Math.floor(Math.random() * 3)]
    return cInput
}
function playerSelection() {
    // let pInput = prompt("Play by entering Rock/Paper/Scissors")
    // const pInput1 = pInput.substring(0,1).toUpperCase() + pInput.substring(1).toLowerCase()
    // rock.onclick = () => ps = "rock"
    // paper.onclick = () => ps = "paper"
    // scissors.onclick = () => ps = "scissors"
    return ps
}

function playRound(computerSelection,playerSelection) {
    if (computerSelection==="Rock" && playerSelection==="Rock"
      ||computerSelection==="Paper" && playerSelection==="Paper"
      ||computerSelection==="Scissors" && playerSelection==="Scissors") {
        return "You Drew!"
    } else if (computerSelection==="Rock" && playerSelection==="Paper") {
        return "You Win! Paper beats Rock"
    } else if (computerSelection==="Rock" && playerSelection==="Scissors") {
        return "You Lose! Rock beats Scissors"
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
    // for (let i = 0; i < 5; i++) {
        // const cs = computerSelection()
        // const ps = playerSelection()
        // console.log("The Computer Chose " + cs + " And You Chose " + ps)
        // console.log(playRound(cs,ps))
        // const pg = playRound(cs,ps)
        // if (pg.substring(0,8) === "You Win!") {
        //     score++
        // }
        // if (pg === "You Drew!" || pg === "You Entered A Incorrect Value") {
        //     i--
        // }
    //  }
    gamesPlayed++
    if (result.substring(0,8) === "You Win!") {
        score++
    }
    if (result === "You Drew!" || result === "You Entered A Incorrect Value") {
        gamesPlayed--
    }
    switch (gamesPlayed) {
        case 0:
            gameResultText = 'You Have 5 Games Left'
            break;
        case 1:
            gameResultText = 'You Have 4 Games Left'
            break;
        case 2:
            gameResultText = 'You Have 3 Games Left'
            break;
        case 3:
            gameResultText = 'You Have 2 Games Left'
            break;
        case 4:
            gameResultText = 'You Have 1 Games Left'
            break;
        case 5:
            if (score > 2) {
                gameResultText = 'FINAL: YOU WIN!'
            } else {
                gameResultText = 'FINAL: YOU LOOSE!'
            }
            break;
        default:
            break;
    }
    
}


// const cs = computerSelection()
// const ps = playerSelection()?
// console.log("The Computer Chose " + cs + " And You Chose " + ps)
// console.log(playRound(cs,ps))




//Button Click Code\\
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');


rock.addEventListener('click', () => {
   ps = "Rock" 
   cs = computerSelection()
   buttonChoice();
  });
// paper.addEventListener('click' , buttonChoice, ps="Paper");
paper.addEventListener('click', () => {
    ps = "Paper" 
    cs = computerSelection()
   buttonChoice();
   });
// scissors.addEventListener('click' , buttonChoice, ps="scissors");
scissors.addEventListener('click', () => {
    ps = "Scissors" 
    cs = computerSelection()
   buttonChoice();
   });

function buttonChoice() {
    const choices = document.createElement('p');
    choices.textContent = 'The Computer chose ' + cs + ' And You Chose ' + playerSelection();
    results.appendChild(choices)
    
    round = playRound(cs,ps)
    game()
    const roundResult = document.createElement('p');
    roundResult.textContent = round
    results.appendChild(roundResult)

    const gameResult = document.createElement('p')
    gameResult.textContent = gameResultText
    results.appendChild(gameResult)

    

    // console.log("The Computer Chose " + computerSelection() + " And You Chose " + playerSelection())
}

// rock.addEventListener('click', () => {
//   let cs = computerSelection()
//   ps = "Rock";
//   console.log("The Computer Chose " + cs + " And You Chose " + ps)
//   console.log(playRound(computerSelection(),playerSelection()))
  

//   roundText.textContent = 'The Computer Chose '  + cs +  ' And You Chose ' + ps;
//   container.appendChild(roundText)
// });


// paper.addEventListener('click', () => {
//   let cs = computerSelection()
//   ps = "Paper";
//   console.log("The Computer Chose " + cs + " And You Chose " + ps)
//   console.log(playRound(computerSelection(),playerSelection()))

//   roundText.textContent = 'This ';
//   container.appendChild(roundText)
// });


// scissors.addEventListener('click', () => {
//   let cs = computerSelection()
//   ps = "Scissors";
//   console.log("The Computer Chose " + cs + " And You Chose " + ps)
//   console.log(playRound(computerSelection(),playerSelection()))
// });








