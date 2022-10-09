var num1 = parseInt(prompt("Enter the first  number"),10);
var num2 = parseInt(prompt("Enter the second  number"),10);

if (num1 > num2){
    document.write("First number " + num1 + " is larger.");
} else if(num2 > num1){
    document.write("Second number " + num2 + " is larger.");
}else {
    document.write("Two numbers are equal.");
}