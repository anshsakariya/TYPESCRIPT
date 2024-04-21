
// CALL SIGNATURES

type Student = {
    name:string;
    age:number;
    gender?:string;   //optional property
    greet: (country:string) => string  //method call signature
    //(country:string):string //call signature methods
}

const student1:Student={
    name:"ansh",
    age:29,
    greet:(country) => `welcome my name is ${student1.name}, I am ${student1.age} years old $ i am from ${country}`
}

const student2:Student={
    name:"sakariya",
    age:29,
    greet:(country) => `welcome my name is ${student2.name}, I am ${student2.age} years old $ i am from ${country}`
}

const introduction : (student:Student)=>string=(student:Student):string =>{
    const {name,age}=student;
    return `welcome my name is ${name}, I am ${age} years old`;
}
console.log( introduction(student1));
console.log(student1.greet('India'));
console.log(student2.greet('america'));

