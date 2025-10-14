//STEP 1

function halfNumber(number){
    "use strict";

    if(number === null || isNaN(number) )
    {
        return window.console.log("Please enter a number");
    }else
    var result = number / 2;
    window.console.log("Half of " + String(number) + " is " + String(result) + ".");
    return result;
}
halfNumber(5);
halfNumber();
halfNumber(5.5);
halfNumber("Hi");

//STEP 2
function squareNumber(number){
    "use strict";

    if(number === null || isNaN(number) )
    {
        return window.console.log("Please enter a number");
    }else
    var result = number * number;
    window.console.log("The result of squaring the number " + String(number) + " is " + String(result) + ".");
    return result;
}
squareNumber(3);

//STEP 3
function percentOf(num1,num2){
    "use strict";

    if(isNaN(num1) || isNaN(num2))
    {
        return window.console.log("Invalid argument.Please enter a number");
    }else
    var result = Math.round((num1 / num2)*100);
    window.console.log(String(num1) + " is " + String(result) + "% of " + String(num2));
    return result;
}
percentOf(2,4);
percentOf(2,"hi");
percentOf(3,9);

//STEP 4
function findModulus(num1,num2){
    "use strict";

    if(isNaN(num1) || isNaN(num2))
    {
        return window.console.log("Invalid argument.Please enter a number");
    }else
    var result = num1 % num2;
    window.console.log(String(result) + " is the modulus of " + String(num1) + " and " + String(num2));
    return result;
}
findModulus(4, 2);

//STEP 5
function sumNymbers(){
    "use strict";
    var sum = 0;
    var numbers = window.prompt("Enter the numbers delimited by comma");
    numbers = numbers.split(",");
    for(var i = 0; i<numbers.length; i++){
        sum += parseInt(numbers[i])
    }
    window.console.log("Sum of the numbers " + numbers + " is: " + String(sum));

    return sum;

    
}
sumNymbers();