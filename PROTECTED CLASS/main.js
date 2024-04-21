"use strict";
//PROTECTED CLASS
console.log("================================");
class pers {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduceparent() {
        return `hi i'm ${this.name} and i am ${this.age} years old.i love ${this.hobbies.join(",")}.`;
    }
}
class aaa extends pers {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        //return  `${super.introduce()}. I am in grade ${this.grade}`;
        return this.hobbies;
    }
}
const ppp1 = new pers("ansh", 12, ["reading", "speaking"]);
console.log(ppp1.introduceparent());
const stude1 = new aaa("ravina", 20, ["coding", "music"], 9);
console.log(stude1.introduce());
