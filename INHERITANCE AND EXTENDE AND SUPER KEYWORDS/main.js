"use strict";
//INHERITANCE AND EXTENDE AND SUPER KEYWORDS
class Pers {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hi. I'm ${this.name} and I'm ${this.age} years old.I love ${this.hobbies.join(",")}.`;
    }
}
//inheritance
class Students extends Pers {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()} I am in grade ${this.grade}`;
    }
    introduce1() {
        return `Hi. I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies}.i am in grade ${this.grade}.`;
    }
}
const Students1 = new Students("ansh", 12, ["reading", "painting"], 10);
const perso5 = new Pers("raj", 15, ["reading", "coding"]);
const perso6 = new Pers("dhyey", 13, ["painting", "coding"]);
const Students2 = new Students("ravina", 22, ["painting", "sports"], 9);
console.log(perso6.introduce());
console.log(Students1.introduce());
console.log(Students2.introduce1());
