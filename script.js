
let playerScore = 0;
let computerScore = 0;
const computer = document.querySelector('#computerScore');
const player = document.querySelector('#playerScore');
const result = document.querySelector('#result');

function computerPlay() {
    let num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
      case 1:
        return 'rock';
      case 2:
        return 'paper';
      case 3:
        return 'scissors';
    }
}
function playRound(playerSelection, computerSelection) {
	
    if(playerSelection === computerSelection){ 
         return ('It is a tie! The computer chose ' + 
         computerSelection +"."); 
        }
    if(playerSelection === 'rock'){
        if(computerSelection === 'scissors'){
            playerScore++;
            return ('Player Wins! The computer chose ' +
            computerSelection + ".");
                    }else{
            computerScore++;
            return ('Computer Wins! The computer chose ' + 
                computerSelection + ".");
        }
    }
    if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            computerScore++;
           return ('Computer Wins! The computer chose ' + 
                computerSelection + ".");    
                    }else{
                playerScore++;
            return ('Player Wins! The computer chose ' +
                computerSelection + ".");
         }
    }
     if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            computerScore++;
            return ('Computer Wins! The computer chose ' + 
                computerSelection + ".");   
                    }else{
             playerScore++;
            return ('Player Wins! The computer chose ' +
                computerSelection + ".");
        }
    }
}
function game(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const computerSelection = computerPlay();
            result.textContent = playRound(button.id, computerSelection)
            player.textContent = "Player Score: " + playerScore;
            computer.textContent ="Computer Score: " + computerScore;
        if (playerScore == 3){
                result.textContent = "Player Wins Best out of 3!"
                computerScore = 0;
                playerScore = 0;
            }
        if (computerScore == 3){
                result.textContent = "Computer Wins Best out of 3!"
                computerScore = 0;
                playerScore = 0;
            }
        });
    }); 
}
game();