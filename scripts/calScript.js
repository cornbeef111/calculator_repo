
let firstNumber;
let secondNumber;
let step = 0;
let operator;
let result = 0;

let numArray = [];
let numArray2 = [];

let display = document.querySelector('.forDisplay');


function getNumber(num){
    if(step === 0 || step === 1){
        numArray.push(num);
        step = 1;
        firstNumber = Number(numArray.join(''));
        display.innerHTML = firstNumber;
    }else if(step === 2){
        numArray2.push(num);
        secondNumber = Number(numArray2.join(''));
        display.innerHTML = secondNumber;
    }
}

function getOperator(op){
    step = 2;
    operator = op;
}

function getDecimal(dec){
    console.log(dec)
}

function clearDisplay(){
    display.innerHTML = 0
     firstNumber = null;
     secondNumber = null;
     step = 0;
     operator = null;
     result = 0;
     numArray = [];
     numArray2 = [];
}

function calculate(){
    switch(operator){
        case "+":
          result = firstNumber + secondNumber
          break;
        case "-":
          result = firstNumber - secondNumber
          break;
        case "*":
          result = firstNumber * secondNumber
          break;
        case "/":
          result = firstNumber / secondNumber
          break;
        case "%":
          result = firstNumber % secondNumber
          break;
        default:
          result = "choose a correct operator";
    }
    display.innerHTML = result;
}