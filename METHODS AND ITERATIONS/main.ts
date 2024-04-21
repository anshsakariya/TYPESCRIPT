//METHODS AND ITERATIONS

//adding elements to an array usinug push
const fruits:string[]=["apple","banana","orange","mango"];
const newupdatefruits=fruits.push("kiwi")
console.log(newupdatefruits);
console.log(fruits)

//remove elements from an array using pop

const lastdata =fruits.pop();
console.log(lastdata);
console.log(fruits);


//using for loop

for(let i=0;i<fruits.length;i++){
    console.log(i);
}


for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log("-------------------------------")

for(const fruit of fruits){
    console.log(fruit);
}

console.log("-------------------------------")

fruits.forEach((curVal:string)=> console.log(curVal))

