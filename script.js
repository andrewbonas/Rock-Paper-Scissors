
let playerScore = 0;
let computerScore = 0;

function computerPlay(computerChoice){
    return computerChoice;
}
    const computerOptions = ['rock', 'paper', 'scissors'];
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];
    
for(i = 0; i < 3; i++) {

function playRound(playerSelection, computerSelection) {
	
    if(playerSelection === computerSelection){
           alert ('It is a tie! The computer chose ' + computerSelection +".") ; 
         return;
         }

    if(playerSelection === 'rock'){
        if(computerSelection === 'scissors'){
            alert('Player Wins! The computer chose ' + computerSelection + ".");
            return playerScore++;     
                }else{
            alert('Computer Wins! The computer chose ' + computerSelection + ".");
            return computerScore++;
        }
    }

    if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
           alert('Computer Wins! The computer chose ' + computerSelection + ".") ;
           return computerScore++;      
                }else{
            alert('Player Wins! The computer chose ' + computerSelection + ".");
            return playerScore++;
         }
    }

     if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            alert('Computer Wins! The computer chose ' + computerSelection + ".");
            return computerScore++;     
                }else{
            alert('Player Wins! The computer chose ' + computerSelection + ".");
            return playerScore++;
        }
    }
}
const playerSelection = prompt("rock, paper or scissors?").toLowerCase();
const computerSelection = computerPlay(computerChoice)
console.log(playRound(playerSelection, computerSelection))

}

alert(`Wins: ${playerScore}, Losses: ${computerScore}`);

if (playerScore === computerScore){
    alert('It is a tie out of 3!');
} else if (playerScore < computerScore) {
    alert('You LOST best out of 3!');
} else {
    alert('You WON best out of 3!');
}
  