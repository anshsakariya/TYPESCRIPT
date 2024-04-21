"use strict";
// MASTER TYPESCRIPT UNION AND INTERSECTIONS
const userinput = (value) => {
    if (typeof value === 'number') {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error('invalid input data');
    }
};
//function call
console.log(userinput(10));
console.log(userinput("subascribe"));
console.log("-------------------------------");
const Employee1 = {
    name: 'Ansh',
    age: 29,
    emp_id: 111,
    department: 'IT'
};
const mypersoninfo = {
    name: 'dhyey',
    age: 29,
};
console.log("================================================");
const user11 = { name: "ravina", age: 20 };
const Mylocation = { city: "pune", country: "india" };
//define
const createuser = (user11, location) => {
    return `my name is ${user11.name} and i am living in city : ${location.city}`;
};
// call
console.log(createuser(user11, Mylocation));
console.log("===============================");
const User = { name: "ravina", age: 20 };
const MMylocation = { city: "pune", country: "india" };
//define
const createuse = (User, location) => {
    // return `my name is ${User.name} and i am living in city : ${location.city}`
    return { ...User, ...location };
};
// call
const mycompleteinfo = createuse(User, MMylocation);
console.log(mycompleteinfo);
