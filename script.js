function getComputerChoice(choices) {
    let Comchoice = Math.floor(Math.random()*3);
    return choices[Comchoice]
}

function playRound(playerSelection, computerSelection, choices) {
    let explain = ['Rock beats Scissors','Paper beats Rocks', 'Scissors beats Paper']; 
    
    const p = choices.indexOf(playerSelection);
    const c = choices.indexOf(computerSelection);
    let result = ''

    if (p - c === 1 || p - c === -2) {
        result += `You win! ${explain[p]}`;
        alert(result);
        return 1
    } else if (p - c === 0) {
        result += `You draw.`;
        alert(result)
        return 0
    } else {
        result += `You lose.. ${explain[c]}`;
        alert(result)
        return -1
    }
  }

function game(){
    let playerPoint = 0;
    let computerPoint = 0;
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];

    for (let i = 1; i <= 5; i++) {
        let playerInput = prompt(`Round ${i}. Please choose your weapon: Rock, Paper, or Scissors?`);
        if (playerInput === null) {
            alert(`We can end this here.`)
            break
        }
        const playerSelection = playerInput.toUpperCase();
        const computerSelection = getComputerChoice(choices);
        let ans = playRound(playerSelection, computerSelection, choices);
        if (ans === 1) {
            playerPoint += 1;
        } else if (ans === -1) {
            computerPoint += 1;
        }
    }

    if (playerPoint - computerPoint > 0) {
        alert('You won the game! Let\'s go!')
    } else if (playerPoint - computerPoint < 0) {
        alert('You lost the game. Good luck next time.')
    } else {
        alert('Maybe there is a tie after all.')
    }
}

game()
  

  
