/*eslint-env browser*/
var $ = function(id){
    "use strict";
    return document.getElementById(id);
}
var delBtn = [],i;
for (i = 0; i < 5; i++){
    delBtn[i] = "<button id='delBtn" + String(i) + "'>delete</button>";
}

var employeelist = [["Raj Kulkarni", "Software Devloper", 2627, delBtn[0]],
                    ["Kally Windsor", "Quality Assurance", 4556, delBtn[1]],
                    ["Mark Martin", "Marketing", 1223, delBtn[2]],
                    ["John Johnson", "Software Devloper", 9087, delBtn[3]],
                    ["Sally Smith", "VP Sales", 2434, delBtn[4]]];


function displayEmployees(){
    "use strict";
    var table, column, row, str="";
    table = document.getElementById("table")[0];
    $("employees").innerHTML = "Showing " + employeelist.length + " Employees";

    for(row = 0; row < employeelist.length; row++){
        str += "<tr>";
        for(column = 0; column < 4; column++){
            str += "<td>" + employeelist[row][column] + "</td>";
        }
        str += "</tr>";
    }
    $("tableBody").innerHTML = str;

}
function addEmployees(){
    "use strict";
    var name, title, extension, employee = [];
    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;
    if (name === ""){
        $("name").nextSibling.innerHTML = " This is required field*";
        return;
    }else{
        $("name").nextElementSibling.innerHTML = "";
        employee.push(name);
    }
    if (title === ""){
        $("title").nextElementSibling.innerHTML = " This is required field*";
        return;
    }else{
        $("title").nextElementSibling.innerHTML = "";
        employee.push(title);
    }
    if (extension === ""){
        $("extension").nextElementSibling.innerHTML = " This is required field*";
        return;
    }else if (isNaN(extension)){
        $("extension").nextElementSibling.innerHTML = " Enter a number*";
        return;
    }else{
        $("extension").nextElementSibling.innerHTML = "";
        employee.push(extension);
        delBtn[employeelist.length +1] = "<button id='delBtn" + String(i) + "'>delete</button>";
        employee.push(delBtn[employeelist.length +1]);
    }
    
    if(employee.length > 0){
        employeelist.push(employee);
    }
    displayEmployees();
    $("myform").reset();
}
function deleteEmployees(index){
    "use strict";
    employeelist.splice(index,1);
    displayEmployees();
}

window.addEventListener("load",function(){
    "use strict";
    displayEmployees();
    $("add").addEventListener("click",addEmployees);
    $("tableBody").addEventListener("click", function (e) {
        if (e.target.textContent.match(/delete/)) {
            var i, index, btns;
            btns = $("tableBody").getElementsByTagName("button");
            for (i = 0; i < btns.length; i += 1) {
                if (e.target.idName === btns[i].idName) {
                    index = i;
                }
            }
            deleteEmployees(index);
        }
    });
})

