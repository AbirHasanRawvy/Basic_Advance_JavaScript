// JavaScript Object & JSON | Arrays and Array Methods | 
// Strings and String Operations | JavaScript Date | 
// Math | Number | Window object | Navigator object

//Object;
const myName = "Abir Hasan";

let student = {
    name: "Abir",
    age: 20,
    subjects: ["TOC","WebTec","AddWeb"],
    "full name" : "Abir Hasan",
};//2 way of object asscess: 1. dot donation, 2. bracket notation;
//dot notation;
console.log(student.name);
console.log(student.age);
//Bracket notation;
console.log(student["full name"]);

//under object function;
let calculator = {
    x: 10,
    y: 20,
    add: function () {//when we are not mentioned parameter we must use this key word;
        return this.x + this.y; 
    },
    mul: function () {
        return this.x * this.y;
    },
};
console.log(calculator.add());
console.log(calculator.mul());

//JSON:JavaScript Object Notation, JSON need when we intarect with database;
let student1 = {
    name: "Abir",//key: "value";
    age: 20,
    subjects: ["TOC","WebTec","AddWeb"],
    "full name" : "Abir Hasan",
};
//step-1;
let jsonString = JSON.stringify(student1);
console.log(jsonString);
//step-2;
let parsedObject = JSON.parse(jsonString);
console.log(parsedObject);

//Converted to the array and also find out the keys;
const keys = Object.keys(student1);
console.log(keys);


//Converted to the array and also find out the values;
const values = Object.values(student1);
console.log(values);

//keys and value both axcess with array;
const entries = Object.entries(student1);
console.log(entries);

//for in: use for in for object ittaration ;
for(let key in student){
    console.log(student[key]);
    console.log(key);
};

///Array;
const numbers = [1, 2, 3, 4, 5];
const friendNames = ["Tahfim", "Atik", "Ratul"];
const myInfo = ["Abir", 25, ["CSE", "SE"]];

console.log(typeof myInfo);
console.log(numbers);
console.log(numbers[1]);
console.log(friendNames[2]);

//Empty array;