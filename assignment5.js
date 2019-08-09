// Basic arithmetic operations in javascript

let num1 = 10;
let num2 = 8;
let add = "addition";
let sub = "substraction";
let mul = "multiplication";
let div = "divison";

// calculator(num1, num2, add);
// calculator(num1, num2, sub);
// calculator(num1, num2, mul);
calculator(10, 15, mul);


function calculator(num1, num2, arithOpt) {
    if(num1 !== NaN && num2 !== NaN) {
        switch(arithOpt) {
            case add:
                console.log(num1 + num2);
                break;
            case sub:
                console.log(num1 - num2);
                break;
            case mul:
                console.log(num1 * num2);
                break;
            case div:
                console.log(num1 / num2);
                break;
            default:
                console.log("Incorrect Operation Selected!")
        }
    } else {
        console.log("Please enter a number in first and second argument!");
    }
}