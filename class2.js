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