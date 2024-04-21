"use strict";
//INTERFACE  CONTRACTS, OBJECT, CLASSES
const gre = {
    name: "ansh",
    age: 25,
};
console.log("======================");
const product1 = {
    name: "laptop",
    price: 1000,
    quantity: 5
};
const product2 = {
    name: "pc",
    price: 10000,
    quantity: 10
};
const calculatetotalprices = (product) => {
    const { price, quantity } = product;
    return price * quantity;
};
console.log(calculatetotalprices(product1));
console.log(calculatetotalprices(product2));
