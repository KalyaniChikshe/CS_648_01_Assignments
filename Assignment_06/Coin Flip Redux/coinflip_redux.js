var coinFlip;
var i;

for(i=0; i<10; i++){
    coinFlip = Math.round(Math.random());
    console.log(coinFlip);
    if(coinFlip === 0 ){
        console.log('Heads')
    } else {
        console.log('Tails');
    }
}