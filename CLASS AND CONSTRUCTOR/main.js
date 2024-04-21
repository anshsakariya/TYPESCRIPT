"use strict";
//OBJECT ORIENTED PROGRAMMING CLASSES AND CONSTRUCTOR
class Persons {
    name = "vinod";
    age = 12;
    hobbies = ["reading", "painting"];
}
const persons22 = new Persons();
console.log(persons22);
console.log(persons22.age);
console.log("=================");
class Perso {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const perso1 = new Perso("ansh", 12, ["reading", "painting"]);
const perso2 = new Perso("raj", 15, ["reading", "coding"]);
const perso3 = new Perso("dhyey", 13, ["painting", "coding"]);
console.log(perso1);
console.log(perso2);
console.log(perso3);
