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

//keyUp;
let input1 = document.getElementById('name1');
let output1 = document.getElementById('output1');

input1.addEventListener("keydown", ()=>{
    output1.innerText = input1.value;
});

