"use strict";
//TYPE OBJECT
const person = {
    name: 'DEEPANSHU_NAG',
    age: 27,
    isstudent: true,
    address: {
        city: "pune",
        country: 'India'
    }
};
//todo accessing the object data
console.log(person.address.country);
//todo updating object properties
person.address.country = "JAPAN";
console.log(person.address.country);
