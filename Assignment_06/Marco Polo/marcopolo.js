var i;

for(i=1; i<=100; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        document.write("Marco!Polo!");
    }else if (i % 3 === 0){
        document.write("Marco!");
    }else if(i % 5 === 0){
        document.write("Polo!");
    }else{
        document.write(i);
    }
    document.write("<br>");
}