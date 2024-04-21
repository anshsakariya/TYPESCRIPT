"use strict";
//SHORTED PROPERTIES IN CLASSES IN OOPS
console.log("--------------------------------------------------------------");
class per {
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
class aaaa extends per {
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
const pppp1 = new per("ansh", 12, ["reading", "speaking"]);
console.log(pppp1.introduceparent());
const stud1 = new aaaa("ravina", 20, ["coding", "music"], 9);
console.log(stud1.introduce());
