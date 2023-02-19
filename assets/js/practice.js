"use strict";


let btn = document.querySelector("#products button");
let input = document.querySelector("#products input");
let ul = document.querySelector("#products ul")


// btn.addEventListener("click", function(){

//     if (input.value == "") {
//         alert("dont empty");
//         return;
//     }


// let items = document.querySelectorAll("li");

// for (const item of items) {
//     if (item.innerText == input.value) {
//         input.value = "";
//         alert("Already exist");
//         return;
//     }
// }


// let li = document.createElement("li");
// li.className = "list-group-item mt-2";
// let span = document.createElement("span");
// let icon = document.createElement("i");
// icon.className = "fa-solid fa-circle-xmark";
// span.innerText = input.value;   



// li.append(span, icon)

// ul.append(li);

// //     // ul.innerHTML += `<li class="list-group-item mt-2">${input.value}</li>`      

// input.value = "";   

// deleteITem(li, icon);


// })      


// function deleteITem(li, icon) {
//     icon.addEventListener("click", function () {
//         li.remove();
//     })
// }



// function deleteItems(items){
//     for (const item of items) {
//         item.addEventListener("click", function(){
//             item.remove();
//         })
//     }
// }



// yazdiqimiz reqem qeder add elesin.


btn.addEventListener("click", function(){

    if (input.value == "") {
        alert("Dont empty")
        return;
    }

    if (isNaN(input.value)) {
        alert("test");
        input.value = "";
        return;
    }

    ul.innerHTML = "";

    for (let i = 1; i < input.value; i++) {
        let li = document.createElement("li");
        li.className = "list-group-item mt-2";
        li.innerText = i;
        ul.append(li);
    }

    input.value = "";

    
})















