
// MASTER TYPESCRIPT UNION AND INTERSECTIONS

const userinput: (value: string | number) =>string |number = (value: string |number):string | number =>{
    if (typeof value === 'number'){
        return value * 2;
    } else if(typeof value === "string"){
        return value.toUpperCase();
    }else{
        throw new Error('invalid input data');
    }
};
//function call
console.log(userinput(10));
console.log(userinput("subascribe"));



console.log("-------------------------------");
type person11 = {
    name:string;
    age:number;
}

type Employee = {
    emp_id:number;
    department:string
}

type EmployeeDetails = person11 & Employee

const Employee1:EmployeeDetails = {
    name:'Ansh',
    age:29,
    emp_id:111,
    department: 'IT'
}
const mypersoninfo :person11 = {
    name:'dhyey',
    age:29,
}

console.log("================================================");

type user = {
    name: string;
    age:number
}

type mylocation = {
    city:string;
    country:string
};
const user11:user={name:"ravina", age:20};
const Mylocation :mylocation = {city:"pune", country:"india"}
//define
const createuser = (user11:user,location:mylocation):string =>{
    return `my name is ${user11.name} and i am living in city : ${location.city}`
}
// call
console.log(createuser(user11,Mylocation))


console.log("===============================");
type user111 = {
    name: string;
    age:number
}

type mylocation111 = {
    city:string;
    country:string
};
const User:user111={name:"ravina", age:20};
const MMylocation :mylocation111 = {city:"pune", country:"india"}
//define
const createuse = (User:user111,location:mylocation111) :user111 & mylocation111 =>{
    // return `my name is ${User.name} and i am living in city : ${location.city}`
    return {...User, ...location}
}
// call
const mycompleteinfo: user111 & mylocation111 = createuse(User,MMylocation)
console.log(mycompleteinfo)

