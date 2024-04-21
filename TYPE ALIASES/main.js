"use strict";
//TYPE ALIASES
const person1 = {
    name: 'DEEPANSHU_NAG',
    age: 27,
    isstudent: true,
    address: {
        city: "pune",
        country: 'India'
    }
};
const person2 = {
    name: 'DEEPANSHU_NAG',
    age: 27,
    isstudent: true,
    address: {
        city: "pune",
        country: 'india'
    }
};
const product = {
    name: "laptop",
    price: 1000,
    quality: 5
};
const calculate = (product) => {
    return `${product.name} total cost ${product.price * product.quality}`;
};
console.log(calculate(product));
