var coinFlip = Math.floor(Math.random() * 10);

parseInt(coinFlip);
console.log(coinFlip);
var choice = prompt("Heads or Tails?");
var heads = Boolean(coinFlip < 5);


if((heads == true) && (choice == "Heads")){
    window.alert("The flip was heads and you chose heads...you win!");
}else if((heads == true) && (choice == "Tails")){
    window.alert("The flip was heads but you chose tails...you lose!");
}else if((heads != true) && (choice == "Heads")){
    window.alert("The flip was tails but you chose heads...you lose!");
}else if((heads != true) && (choice == "Tails")){
    window.alert("The flip was tails and you chose tails...you win!");
}else{
    window.alert("Invalid choice.");
}

