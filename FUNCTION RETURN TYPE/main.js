"use strict";
// BOOLEAN
let ismyname = true;
let done = true;
let started = false;
//started="yes" //invalid
function even(a) {
    return a % 2 === 0;
}
//function call
console.log(even(10));
//ANY VS UNKOWN
let maxnumber = Number.MAX_SAFE_INTEGER;
console.log(maxnumber);
let myfavnumber = 5;
myfavnumber = "vinod";
myfavnumber = true;
let num2;
num2 = 5;
num2 = "thapa";
num2 = true;
if (typeof num2 === "number") {
    console.log(num2 + 5);
}
else if (typeof num2 === "boolean") {
    console.log(num2);
}
//FUNCTION TYPESCRIPT
function greet(name, id) {
    console.log(`welcome , ${name} and your id is ${id}`);
}
greet("vinod", 1);
//ARROW FUNCTION
const great = (name, id) => {
    console.log(`welcome , ${name} and your id is ${id}`);
};
great("ram", 2);
//FUNCTION RETURN TYPE
const type = (name, id) => {
    return `welcome , ${name} and your id is ${id}`;
};
const mygreet = type("manan", 3);
console.log(mygreet);
const type1 = (name, id) => `welcome , ${name} and your id is ${id}`;
const mygreet1 = type1("ram", 4);
console.log(mygreet1);
const palindrome = (palin) => {
    let mypalin = palin.split("").reverse();
    return mypalin;
};
console.log(palindrome("123261"));
const is = (palin) => {
    let mypalin = palin.split("").reverse().join("");
    return mypalin === palin;
};
console.log(is("12321"));
//TYPE INFERENCE
let myname = 'vinod';
let my = 105555;
