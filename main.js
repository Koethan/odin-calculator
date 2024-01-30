// let input1 = Number(prompt('type in your first number'))
// let input2 = Number(prompt('type in your second number'))
// let operation = prompt('type add, subtract, multiply, divide for the operation')



function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1/num2
}



function calculator(num1, num2, operation){
    if(operation === '+'){
        return add(num1,num2)
    }
    if(operation == '-'){
        return subtract(num1,num2)
    }
    if(operation == '*'){
        return multiply(num1,num2)
    }
    if(operation == '/'){
        return divide(num1,num2)
    }
}

// console.log(calculator(input1, input2, operation))

let digit = document.querySelectorAll('.number')
let operator = document.querySelectorAll('.operation')
let equals = document.querySelector('#equals')
let clear = document.querySelector('#clear')
console.log(digit, operator, equals, clear)
let number = 0
let firstNumber=0
let secondNumber=0
let operation;

let display = document.querySelector('#display')
display.textContent = number
digit.forEach((digit)=>{
    digit.addEventListener('click',()=>{
        
        number += digit.innerText
        console.log(digit.innerText)
        display.textContent = number.slice(1)
        if(operation == undefined){
            firstNumber += digit.innerText
        }else{
            secondNumber += digit.innerText
        }
        
    })
})



operator.forEach((op)=>{
    op.addEventListener('click', ()=>{
        operation = op.innerText
        number = 0
        display.textContent = number
        console.log(operation)
    })
})

let equalBtn = document.querySelector('#equals')
equalBtn.addEventListener('click', ()=>{
    let total = calculator(Number(firstNumber), Number(secondNumber), operation)
    console.log(Number(firstNumber), Number(secondNumber), operation, total)
    display.innerText = total
})

console.log(number)
