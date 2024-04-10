function getComputerChoice(){
    let plays = ["Rock","Paper","Scissors"]
    let random_element = plays[Math.floor(Math.random()* plays.length)] 
    return random_element
}
console.log(getComputerChoice())

function playRound(playerSelection,ComputerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
}