"use strict";
// FUNCTION OVERLOADING  AND MULTIPLE VARIABLE TYPE
//GENERICS
function ad(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
const result1 = ad(5, 10);
const result2 = ad("hello", "world");
console.log("==========================");
function aa(c, d, e) {
    console.log(typeof c);
    console.log(typeof d);
    console.log(typeof e);
}
const result3 = aa(5, "thapa", true);
const result4 = aa("thapa", 6, false);
