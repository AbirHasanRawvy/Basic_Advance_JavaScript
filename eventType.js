//Event Type:;

//Mouse Event;

//click event;

//Mouse in-out;
let box = document.getElementById('box');

//Mouse in;
box.addEventListener("mouseover", ()=>{
    box.style.background="green";
});

//Mouse out;
box.addEventListener("mouseout", ()=>{
    box.style.background="red";
});


//keyUp;
let input = document.getElementById('name');
let output = document.getElementById('output');

input.addEventListener("keyup", ()=>{
    output.innerText = input.value;
});

//keyDown;
let input1 = document.getElementById('name1');
let output1 = document.getElementById('output1');

input1.addEventListener("keydown", ()=>{
    output1.innerText = input1.value;
});

//Form Event;
//submit;
const form = document.getElementById("myform");
form.addEventListener("submit", (e) => {

    e.preventDefault();//for not reloading the page;

    alert("Success!!!");
});

//focus;
const input2 = document.getElementById('myInput1');
const message = document.getElementById('message');

input2.addEventListener("focus", function(){
    message.innerText="You focus input field.";
    message.style.color="red";
    message.style.background="green";
    message.style.border="black";
    message.style.animation="blue";
});

//blur;
let emailInput = document.getElementById('email');
let warning = document.getElementById('warning');

emailInput.addEventListener("blur", function(){
    if(emailInput.value.trim()===""){
        warning.innerText = "Email is required."
    }else{
        warning.innerText="";
    }
});

//Change;
let select = document.getElementById('color');
let result = document.getElementById('result');

select.addEventListener("change", function(){
    result.innerText = select.value;
});

//Input:same thing of key event;
const input3 = document.getElementById("myInput2");
const result1 = document.getElementById("result1");

input3.addEventListener("input", function(){
    result1.innerText = input3.value
});

//Window Event;
//load;
window.addEventListener("load", function(){
    console.log("Page Loaded");
});

//Scroll;
window.addEventListener("scroll", function(){
    console.log("Page scroll");
});