"use strict";
//TYPE NARROWING
console.log("---------------------------");
const favHobbies = (hobby) => {
    if (Array.isArray(hobby)) {
        return hobby.map(() => { });
    }
    else {
        console.log(hobby);
    }
};
favHobbies("coding");
favHobbies(['coding', 'games']);
