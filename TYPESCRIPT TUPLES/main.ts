
//TYPESCRIPT TUPLES

type personInfo = [string,number,boolean]
//type personInfo = readonly[string,number,boolean]

//function to display person information
const displaypersonInfo:(person:personInfo)=>void = (person:personInfo):void=>{
    const [name, age ,hasdriverlicense]=person;
    console.log(`name:${name},age:${age}, driver's license : ${hasdriverlicense ? "Yes" : "NO"}`);
}


//example usage
const p1:personInfo=['ansh',29,true];
const p2:personInfo=['dhyey',17,false];

p1.push("coding")
console.log(p1);


//function call
displaypersonInfo(p1)
displaypersonInfo(p2)

