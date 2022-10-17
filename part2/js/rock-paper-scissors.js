/*eslint-env browser*/

function displayTitle() {
    "use strict";
    
    window.alert("Welcome to the Rock, Paper, Scissors Game!");
}
    


function playGame(){
    "use strict";

    var userChoice = window.prompt("Enter your choice: Rock, Paper or Scissors?");
    var computerChoice = Math.random();
    if ((computerChoice >= 0)&&(computerChoice < 0.3)){
        computerChoice = "Rock";
    }else if((computerChoice >= 0.31)&& (computerChoice <= 0.6)){
        computerChoice = "Paper";
    }else{
        computerChoice = "Scissors";
    }

    if((userChoice !== "Rock")&&(userChoice !== "Paper")&&(userChoice !== "Scissors")){
        userChoice = window.prompt("Please Enter a valid choice : Rock, Paper or Scissors");
    }

    if(userChoice === computerChoice) {
        alert("It's a tie!");
    }
    if(userChoice === "Rock") {
        if(computerChoice === "Scissors") {
            alert("You win!");
        } else {
            alert("You lose!");
        }
    }
    if(userChoice === "Paper") {
        if(computerChoice === "Rock") {
            alert("You win!");
        } else if(computerChoice === "Scissors") {
                alert("You lose!");
            }
    }
    if(userChoice === "Scissors") {
        if(computerChoice === "Paper") {
            alert("You win!");
        } else if(computerChoice === "Rock") {
                alert("You lose!");
            }

    }

}

function main() {
    "use strict";
    var playagain = "y";
    displayTitle();
    while (playagain === "y") {
        playGame();
        playagain = window.prompt("Do you want to play again (y/n)?");
    }
    window.alert("Thanks for playing!");
}
main();
