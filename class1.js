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

let calculator = {
    x: 10,
    y: 20,
    add: function () {
        return this.x + this.y; 
    },
    mul: function () {
        return this.x * this.y;
    },
};
console.log(calculator.add());
console.log(calculator.mul());