//VARIABLES
const btnClear = document.getElementById('clear');
const btnDel = document.getElementById('delete');
const btnAdd = document.getElementById('add');
const btnSub = document.getElementById('subtract');
const btnMul = document.getElementById('multiply');
const btnDiv = document.getElementById('divide');
const btnDot = document.getElementById('dot');
const btnEquals = document.getElementById('equals');
const btn1 = document.getElementById('one');
const btn2 = document.getElementById('two');
const btn3 = document.getElementById('three');
const btn4 = document.getElementById('four');
const btn5 = document.getElementById('five');
const btn6 = document.getElementById('six');
const btn7 = document.getElementById('seven');
const btn8 = document.getElementById('eight');
const btn9 = document.getElementById('nine');
const btn0 = document.getElementById('0');
const screen = document.getElementById('screen');

let screenVal = 0;

//LISTENERS


//FUNCTIONS
function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}

function operate(operator, num1, num2){
    if (operator === 'add'){
        return(add(num1,num2));
    }
    else if (operator === 'subtract'){
        return(subtract(num1,num2));
    }
    else if (operator === 'multiply'){
        return(multiply(num1,num2));
    }
    else if (operator === 'divide'){
        return(divide(num1,num2));
    }
}

console.log(operate('divide',5,10));