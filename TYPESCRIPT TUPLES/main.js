"use strict";
//TYPESCRIPT TUPLES
//type personInfo = readonly[string,number,boolean]
//function to display person information
const displaypersonInfo = (person) => {
    const [name, age, hasdriverlicense] = person;
    console.log(`name:${name},age:${age}, driver's license : ${hasdriverlicense ? "Yes" : "NO"}`);
};
//example usage
const p1 = ['ansh', 29, true];
const p2 = ['dhyey', 17, false];
p1.push("coding");
console.log(p1);
//function call
displaypersonInfo(p1);
displaypersonInfo(p2);
