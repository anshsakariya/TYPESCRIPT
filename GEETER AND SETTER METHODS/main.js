"use strict";
//GEETER AND SETTER IN TYPESCRIPT
console.log("-----------------------------------------");
class pe {
    name;
    hobbies;
    _age;
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    set age(age) {
        if (age > 150 || age < 0) {
            throw new Error("age is not valid");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("age is not define");
        }
        return this._age;
    }
    introduceparent() {
        return `hi i'm ${this.name} and i am ${this._age} years old.i love ${this.hobbies.join(",")}.`;
    }
}
const x1 = new pe("ansh", ["reading", "speaking"]);
//x1.age(521);//not valid
x1.age = 21;
console.log(x1.introduceparent());
console.log(x1.age);
