function getComputerChoice(){
    let plays = ["Rock","Paper","Scissors"]
    let random_element = plays[Math.floor(Math.random()* plays.length)] 
    return random_element
}
console.log(getComputerChoice())

function playRound(playerSelection,ComputerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        console.log("Its a draw you both selected");
        console.log(computerSelection);   
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log('Computer Won,Paper beats Rock');
            console.log(computerSelection);  
        } else {
            console.log('Player Won,Rock beats Scissors');
            console.log(computerSelection);  
         
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log('Computer Won,Rock beats Scissors');
            console.log(computerSelection);  
        
        } else {
            console.log('Player Won,Scissors beats Paper');
            console.log(computerSelection);  
  
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            console.log('Computer Won,Scissors beats Paper');
            console.log(computerSelection);  

        } else {
            console.log('Player Won,Paper beats Rock');
            console.log(computerSelection);           
        }
    }
}
const playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


