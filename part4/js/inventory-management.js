/*eslint-env browser*/
function display_menu() {
    "use strict";
    window.console.log("Welcome to Product Inventory Management System!");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all commands");
    window.console.log("view - View inventory");
    window.console.log("update - Update an existing inventory");
    window.console.log("exit - Exit system");
}
function view(inventory) {
    "use strict";
    inventory.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " (" + product[2] + ")" + " $" + product[3]);
    });
    window.console.log("");
}

function update(inventory) {
    "use strict";
    var productFound = false;
    var quantityUpdated = false;
    var skuNumber = parseInt(window.prompt("Enter the sku number of the product"), 10);
    inventory.forEach(function (product) {
        if (product[0] === skuNumber) {
            productFound = true;
            while(quantityUpdated == false) {
                var quantity = parseInt(window.prompt("Enter the new quantity"), 10);
                if (!isNaN(quantity)) {
                    product[2] = quantity;
                    window.console.log("Quantity updated successfully")
                    quantityUpdated = true;
                } else {
                    window.console.log("Please enter a valid number as quantity");
                    window.console.log("");
                }
            }
        }  
    });
    if (productFound == false){
        window.console.log("Product with sku number:" + skuNumber + " not found"); 
    } 
}


function main() {
    "use strict";
    var inventory = [[4824, "Shirt", 10, 15.99],[6343, "Jeans", 22, 39.99],[3223, "Socks", 36, 9.99],[2233, "Hat", 12, 14.99],[9382, "Jacket", 5, 49.99]];
    display_menu();

    while(true) {
        var command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "show") {
                display_menu();
            } else if (command === "view"){
                view(inventory);
            }else if (command === "update"){
                update(inventory);
            }else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program Terminated")
}

main();