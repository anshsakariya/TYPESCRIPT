"use strict";
console.log("+++++++++++++++++++++++++++++++++++++++");
//PUBLIC PROTECTED & PRIVATE AND ACCESS MODIFIERS
//parent class
//class person5{ }
//child class
//class student extends Pers{ }
//PUBLIC CLASS
class perso {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `hi i'm ${this.name} and i am ${this.age}years old.i love ${this.hobbies.join(",")}.`;
    }
}
class sss extends perso {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()}. I am in grade ${this.grade}`;
    }
}
const pp1 = new perso("ansh", 12, ["reading", "speaking"]);
console.log(pp1.hobbies);
const studen1 = new sss("ravina", 20, ["coding", "music"], 9);
console.log(studen1.hobbies);
