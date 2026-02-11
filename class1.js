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
const emptyArray = new Array(5);
console.log(emptyArray);

const colors = new Array("red", "green", "blue");
console.log(colors);

//array methods;
//push mehod: add from last;
const colors1 = ["red", "geen", "blue"];
colors1.push("pink");
console.log(colors1);

//ushift: first add the item;
colors1.unshift("pink");
console.log(colors1);

//pop: remove from last;
colors1.pop("pink");
console.log(colors1);

//shift: remove from first;
colors1.shift("pink");
console.log(colors1);

//Slice: dirrectly not modify;
const numbers1 = [1, 2, 3, 4, 5];
const newnumbers1 = numbers1.slice(1,3);
console.log(newnumbers1);

//filtaring method;
const evenNumbers = numbers1.filter((num) => num % 2 === 0 );
console.log(evenNumbers);

//find method: just show first number;
const findEvenNumbers = numbers1.find((num) => num % 2 === 0 );
console.log(findEvenNumbers);

//indexof
const colors2 = ["red", "blue", "yellow"];
console.log(colors2.indexOf("blue"));

//includes;
console.log(colors2.includes("blue"));


//Most important topic;
const numbers2 = [1, 2, 3, 4, 5];


//Map: return value;
const mapEachNumber = numbers2.map((num) => {
    const doubled1 = 2 * num;
    return doubled1;
});
console.log(mapEachNumber);


//forEach: here work and end. not work on outside;
const forEachNumber = numbers2.forEach((num) => {
    const doubled = 2 * num;
    return doubled;
});
console.log(forEachNumber);

//forEach: here work and end. not work on outside;
const forEachStringNumber = numbers2.map((num) => {
    const stringDoubled = `${2 * num}`;
    return stringDoubled;
});
console.log(forEachStringNumber);

//Sum with reduce;
const sum = numbers2.reduce((acc, curr)=> acc + curr, 0);
console.log(sum);

//Splice;

///String;
//template string;
let fName = "Abir";
let lName = "Hasan";

let fullName = `${fName} ${lName}`;
console.log(fullName);

//Date;
let now = new Date();
console.log(now);

let now1 = new Date("2014-02-11");
console.log(now1);

let now2 = new Date();
console.log(now1.getFullYear);

//Math Object;
console.log(Math.PI);

console.log(Math.E);

console.log(Math.round(4.1));//4

console.log(Math.floor(4.1));//4

console.log(Math.ceil(4.1));//5

console.log(Math.max(4, 3, 1, 5));//5

console.log(Math.min(4, 3, 1, 5));//1

console.log(Math.pow(2, 3));//8

console.log(Math.random());

let N = 3.5521;
console.log(N.toString());

console.log(N.toFixed(2));//2room;

//Window object;
// window.alert("kichu ekta");
console.log(window);

//Navigator Object;
console.log(navigator.platform);

//AppName: Broweser Name;
console.log(navigator.appName);

//Geo location;
// console.log(navigator.geolocation.getCurrentPosition());

//userAgent;
console.log(navigator.userAgent);