

function calculator(num1, num2, operation){
    if(operation === '+'){
        return num1 + num2
    }
    if(operation == '-'){
        return num1 - num2
    }
    if(operation == '*'){
        return num1 * num2
    }
    if(operation == '/'){
        if(num2 === 0){
            return 'Division by 0 is treasonous and punishable by death'
        }
        return num1 / num2
    }
}


let digit = document.querySelectorAll('.number')
let operator = document.querySelectorAll('.operation')
let equals = document.querySelector('#equals')
let clear = document.querySelector('#clear')
console.log(digit, operator, equals, clear)
let number = 0
let firstNumber=0
let secondNumber=0
let operation;
let pressedEqual = false

let display = document.querySelector('#display')
display.textContent = number

digit.forEach((digit)=>{
    digit.addEventListener('click',()=>{
        if(pressedEqual === true){
            firstNumber = 0
        }
        
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
        console.log(operation)
        pressedEqual = false
    })
})

let equalBtn = document.querySelector('#equals')
equalBtn.addEventListener('click', ()=>{
    if(firstNumber != 0 && operation == undefined){
        return
    }
    if(firstNumber == 0 && secondNumber == 0 && operation == undefined){
        display.innerText = 0 
    }else{

        let total = calculator(Number(firstNumber), Number(secondNumber), operation)
        console.log(Number(firstNumber), Number(secondNumber), operation, total)
        display.innerText = total
        number = 0
        firstNumber = total
        secondNumber = 0
        operation = undefined
        pressedEqual = true
    }
})

let clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', ()=>{
    number = 0
    firstNumber = 0
    secondNumber = 0
    operation = undefined
    display.innerText = 0
})

console.log(number)
