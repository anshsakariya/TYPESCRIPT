"use strict";
// CALL SIGNATURES
const student1 = {
    name: "ansh",
    age: 29,
    greet: (country) => `welcome my name is ${student1.name}, I am ${student1.age} years old $ i am from ${country}`
};
const student2 = {
    name: "sakariya",
    age: 29,
    greet: (country) => `welcome my name is ${student2.name}, I am ${student2.age} years old $ i am from ${country}`
};
const introduction = (student) => {
    const { name, age } = student;
    return `welcome my name is ${name}, I am ${age} years old`;
};
console.log(introduction(student1));
console.log(student1.greet('India'));
console.log(student2.greet('america'));
