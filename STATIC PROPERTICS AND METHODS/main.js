"use strict";
console.log("=================================");
//STATIC PROPERTIES AND METHODS
class MathOperations {
    static PI = Math.PI;
    static add(num1, num2) {
        return num1 + num2;
    }
    static sub(num1, num2) {
        return num1 - num2;
    }
}
console.log(MathOperations.PI);
console.log(MathOperations.add(5, 10));
console.log(MathOperations.sub(10, 5));
