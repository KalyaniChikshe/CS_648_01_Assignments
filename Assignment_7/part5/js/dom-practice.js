/*eslint-env browser*/

//STEP 1
function displayMessage(){
    window.alert("I have been clicked.");
}
//STEP 2
window.onload = function () {
    var myElement = document.getElementById("myButton_1")
        myElement.onclick = function () {
        window.alert("I have been clicked.");
    }
}
//STEP 3
function onClickMyButton() {
    window.alert("I have been clicked.")
}
window.addEventListener("load", function(){
    var myButton_2 = window.document.getElementById("myButton_2")
    myButton_2.addEventListener("click", onClickMyButton);
});
//STEP 4 
window.addEventListener("load", function(){
    var myButton_3 = window.document.getElementById("myButton_3")
    myButton_3.addEventListener("click", function() {
        window.alert("I have been clicked.")
    });
})
//STEP 5
//Script within the <head> tag 
