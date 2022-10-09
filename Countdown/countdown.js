var i;

var countdown = window.prompt("Enter the countdown number gretaer than 0");

if(countdown > 0){
    for(i = countdown; i>=0; i--){
        document.write(i + "<br>");
        countdown--;
    }
}else{
    document.write("Enter a number greater than 0")
}


