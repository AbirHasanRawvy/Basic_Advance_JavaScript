//Elements;

//getElementById(): DOM building method. find out by id;

let heading = document.getElementById("heading");
console.log(heading);

//getElementByClassName():
let heading_data1 = document.getElementsByClassName("heading_class");
console.log(heading_data1);

//getElementByClassName();
let heading1 = document.getElementsByClassName("heading_class1");
console.log(heading1);
//Only mentioned index;
console.log(heading1[2]);

//getElementByTagName();
let p_tag = document.getElementsByTagName("p");
console.log(p_tag);

//querySelector: most flexiable;
//for id;
let btn_id = document.querySelector("#btn_id");
console.log(btn_id);

//for class;
let btn_class = document.querySelector(".btn_class");
console.log(btn_class);

//for tag:select the first button;
let btn_tagName = document.querySelector("button");
console.log(btn_tagName);

//querySelectorALL();
let btn_tagName_All = document.querySelectorAll("button");
console.log(btn_tagName_All);
