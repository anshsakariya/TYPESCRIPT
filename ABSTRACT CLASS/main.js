"use strict";
const Person = {
    name: "Ansh",
    age: 29,
};
const Person1 = {
    name: "Dhyey",
    age: 20,
};
const Person2 = {
    name: "Hem",
    age: 15,
};
//circle , rectangle
class shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea = () => {
        console.log(`this is a ${this.color} circle with radius ${this.radius}.`);
    };
}
const circle = new Circle("red", 5);
console.log(circle.calculateArea());
circle.displayArea;
