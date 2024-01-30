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
    if(operation === 'add'){
        return add(num1,num2)
    }
    if(operation == 'subtract'){
        return subtract(num1,num2)
    }
    if(operation == 'multiply'){
        return multiply(num1,num2)
    }
    if(operation == 'divide'){
        return divide(num1,num2)
    }
}

// console.log(calculator(input1, input2, operation))

let btn = document.querySelectorAll('button')
console.log(btn)

btn.