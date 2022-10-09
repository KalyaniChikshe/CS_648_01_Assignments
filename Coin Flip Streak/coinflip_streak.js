var coinFlip;

do{
    coinFlip = Math.round(Math.random());
    console.log(coinFlip);
    if(coinFlip === 0){
        console.log("Heads");
    }else{
        console.log("Tails");
    }

}while(coinFlip !== 1)