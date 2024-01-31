

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
            //setting this to 0 made the next first number into a single digit??
            firstNumber = number;
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
        display.textContent = 0 
    }else{

        let total = calculator(Number(firstNumber), Number(secondNumber), operation)
        console.log(Number(firstNumber), Number(secondNumber), operation, total)
        if(total % 1 != 0){
            total = total.toFixed(2)
        }
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
    display.textContent = number
})


let decimalBtn = document.querySelector('#decimal')
decimalBtn.addEventListener('click', ()=>{
    //need to keep the number thats there and add on to that one after decimal, this stops additional decimals
    // if(firstNumber.toString().includes('.')){
    //     // firstNumber = firstNumber.toString().slice(0,-1)
    //     // number = number.toString().slice(0,-1)
        
    // }

    if(!firstNumber.toString().includes('.')){
        number += '.'
        firstNumber += '.'
    }else if(firstNumber.toString().includes('.') || secondNumber == 0){
        number += '.'
        secondNumber += '.'
    }
    // firstNumber.toString().includes('.') || pressedEqual == true &&
})

console.log(number)
