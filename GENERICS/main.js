"use strict";
//GENERICS
function logAndreturn(value) {
    console.log(value);
    return value;
}
function logAnd(value) {
    return value;
}
const numberresult = logAndreturn(42);
const stringresult = logAndreturn("Hello , Generics");
const booleanresult = logAnd(true);
const number = logAnd(44);
const string = logAnd("HELLO GENERICS");
const boolean = logAnd(true);
console.log(numberresult);
console.log(stringresult);
console.log(booleanresult);
console.log(number);
console.log(string);
console.log(boolean);
function add(a, b) {
    return a + b;
}
const r1 = add(5, 10);
const r2 = add("Hello", " world");
console.log(r1);
console.log(r2);
