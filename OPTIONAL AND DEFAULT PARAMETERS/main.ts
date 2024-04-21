
//OPTIONAL AND DEFAULT PARAMETERS

//fun define
const greet1=(name:string,id:number=1):string=>{
    return `welcome, ${name} and your id is  ${id} `
}
//fun call
const emp = greet1("dhyey")
console.log(emp);

//fun define
const greet2=(name:string,id?:number):string=>{
if(id){
    return `welcome, ${name} and your id is  ${id} `
}
else{
    return `welcome, ${name} `
}
}
//fun call
const emp1 = greet2("ravina")
console.log(emp1);
const emp2=greet2("ravina",2)
console.log(emp2);

