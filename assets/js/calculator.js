"use strict";

let addition = document.querySelector(".addition");
let subtraction = document.querySelector(".subtraction");
let multiplication = document.querySelector(".multiplication");
let division = document.querySelector(".division");



function Sum() {

    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let sum = Number(num1) + Number(num2);

    let result = document.getElementById("result");
    result.value = sum;

}

addition.addEventListener("click", Sum)

function Subtraction() {

    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let sum = Number(num1) - Number(num2);

    let result = document.getElementById("result");
    result.value = sum;

}

subtraction.addEventListener("click", Subtraction)



function Multiplication() {

    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let sum = Number(num1) * Number(num2);

    let result = document.getElementById("result");
    result.value = sum;

}

multiplication.addEventListener("click", Multiplication)


function Division() {

    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let sum = Number(num1) / Number(num2);

    let result = document.getElementById("result");
    result.value = sum;

}

division.addEventListener("click", Division)


