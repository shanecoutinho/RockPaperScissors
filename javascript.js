let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let plays = ["Rock","Paper","Scissors"]
    let random_element = plays[Math.floor(Math.random()* plays.length)] 
    return random_element
}

console.log(getComputerChoice())
function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        console.log("Its a draw you both selected " + playerSelection );
        console.log(computerSelection);
           
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log('Computer Won,Paper beats Rock');
            console.log(computerSelection);
            computerSelection += 1 ;  
        } else {
            console.log('Player Won,Rock beats Scissors');
            console.log(computerSelection);  
            playerScore += 1 ;                  
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log('Computer Won,Rock beats Scissors');
            console.log(computerSelection);  
            computerSelection += 1 ; 
        } else {
            console.log('Player Won,Scissors beats Paper');
            console.log(computerSelection);  
            playerScore += 1 ; 
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            console.log('Computer Won,Scissors beats Paper');
            console.log(computerSelection);  
            computerSelection += 1 ; 

        } else {
            console.log('Player Won,Paper beats Rock');
            console.log(computerSelection); 
            playerScore += 1 ;           
        }
    }
}

function playgame(){
    for (let i = 0;i<5;i++) {
        let playerSelection = prompt("Enter your choice(Rock/Paper/scissors): ");
        let computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
    }

}
if (playerScore == computerScore) {
    console.log("Its a draw")
}else if(playerScore<computerScore){
   console.log("Computer won the game by "+ computerScore + "to " + playerScore);
}else{
   console.log("Player won the game by "+ playerScore + "to " + computerScore)
}
console.log(playgame())


