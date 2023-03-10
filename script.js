//VARIABLES------------------
const btnClear = document.getElementById('clear');
const btnDel = document.getElementById('delete');
const btnDot = document.getElementById('dot');
const btnEquals = document.getElementById('equals');

const numberButtons = document.querySelectorAll('[data-number]');
const operandButtons = document.querySelectorAll('[data-operand]');
const screen = document.getElementById('screen');

let screenVal = 0;
let firstNum = 0;
let secondNum = 0;
let operand;

//LISTENERS------------------

//All 4 operand listeners
operandButtons.forEach((button) => button.addEventListener('click', function(){
    operand = button.id;
    for (let i = 0; i < operandButtons.length; i++){
        operandButtons[i].disabled = true;
    }
    console.log("Chosen operand is " + operand);
    firstNum = screen.innerText;
    console.log("First num is " + firstNum);
    btnEquals.disabled = false;
    btnDot.disabled = false;
    resetScreen();
}));

//Equals listener
btnEquals.addEventListener('click', () => {
    secondNum = screen.innerText;
    console.log(`Second num is ${secondNum}`);
    screen.innerText = (operate(operand, firstNum, secondNum));
    btnEquals.disabled = true;
    btnDot.disabled = false;
    for (let i = 0; i < operandButtons.length; i++){
        operandButtons[i].disabled = false;
    }
});

//All number button listeners
numberButtons.forEach((button) => button.addEventListener('click', function(){
    appendNum(button.textContent)
}));

//Clear listener
btnClear.addEventListener('click', () => {
    screen.innerText = 0;
    firstNum = 0;
    secondNum = 0;
    btnEquals.disabled = true;
    btnDot.disabled = false;
});

//Delete listener
btnDel.addEventListener('click', function(){
    if (screen.innerText == 0 || screen.innerText.length === 1){
        screen.innerText = 0;
        return;
    }

    newVal = screen.innerText;
    newVal = newVal.slice(0, newVal.length - 1);
    screen.innerText = newVal;

    //Check if decimal is present. If not re-enable button
    if (screen.innerText.includes(".") == false){
        btnDot.disabled = false;
    }
});

//Decimal listener
btnDot.addEventListener('click', function(){
    screen.innerText = screen.innerText + this.innerText;
    btnDot.disabled = true;
});

//FUNCTIONS------------------

//Check if screen is just 0 if so reset otherwise append num
function appendNum(number){
    if (screen.innerText === "0"){
        screen.innerText = '';
    }
    screen.innerText = screen.innerText + number;
    // console.log(typeof(number)); its a STRING
}

function resetScreen(){
    screen.innerText = 0;
}

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
    if (num1 == 0 || num2 == 0){
        return "ERROR";
    }
    return num1/num2;
}

function operate(operator, num1, num2){
    let a = Number(num1);
    let b = Number(num2);
    if (operator === 'add'){
        return(add(a,b));
    }
    else if (operator === 'subtract'){
        return(subtract(a,b));
    }
    else if (operator === 'multiply'){
        return(multiply(a,b));
    }
    else if (operator === 'divide'){
        return(divide(a,b));
    }
}