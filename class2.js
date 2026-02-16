//JavaScript events | JavaScript DOM in detail | DOM HTML elements | 
// DOM manipulation | Form handling | DOM element creation | 
// Appending elements | Query selector
console.log("Hello World!");

//When we take something from html file, if select id then use getElementById

const title = document.getElementById("main-title");
console.log(title);

//On the other hand, if we select the class then use getElemenByName;
const paragraph = document.getElementsByClassName("intro");
console.log(paragraph);

//Query Selector: Query selector only select the first intro value further 
//the . use for class and # use for id;
//for class;
const paragraph1 = document.querySelector(".intro");
console.log(paragraph1);

//for id;
const paragraph2 = document.querySelector("#main-title");
console.log(paragraph2);

//change the inner text value;
paragraph[0].innerText = "Welcome to DOM manupulation!";
console.log(paragraph);

paragraph1.innerText = "We are continue DOM manupulation!";
console.log(paragraph1);

//innerHTML;
paragraph2.innerHTML = "<strong>We are continue DOM manupulation!</strong>";
console.log(paragraph2);

//change the title colour;
title.style.color = "blue";
title.style.backgroundColor = "yellow";

//querySelectorAll: same as get elementByName;

//
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function () {
    title.textContent = "Hi from JS!";
    title.style.color = "red";
    title.style.backgroundColor = "yellow";
});//all the event listen;
console.log(myButton);
