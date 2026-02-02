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