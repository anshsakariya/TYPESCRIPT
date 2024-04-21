"use strict";
//MAP FILTER METHODS
//doubling each number
const num = [1, 2, 3, 4, 5, 6];
const double = num.map((curval) => curval * 2);
console.log(double);
//convert number to string
const n = [1, 2, 3, 10, 5, 6];
const numbertostring = n.map((curelm) => curelm.toString());
console.log(numbertostring);
const a = [1, 2, 3, 10];
const numtostring = a.map((curelm) => curelm > 3);
console.log(numtostring);
//filter methods
//filter even number
const x = [1, 2, 3, 10];
const evennumber = x.filter((curelm) => curelm % 2 === 0);
console.log(evennumber);
//filtering  number greather than 3
const y = [1, 2, 3, 10, 7, 8];
const numbergreatherthenthree = y.filter((curelem) => curelem > 3);
console.log(numbergreatherthenthree);
