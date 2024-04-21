
//INTERFACE
type Student9={
    name:string;
    age:number;
};
type student={
    district:string;
    state:string;
};
const Biodata:Student9 & student={
  name:"ansh",
  age:29,
  district:"Rajkot",
  state:"Gujarat",
};
const data:Student9 | student={
    name:"ansh",
    district:"Rajkot",
    state:"Gujarat",
  };
console.log(data);
console.log(Biodata);

console.log("..................................................");
type Student10={
    name:string;
    age:number;
};
type student1={
    district:string;
    state:string;
};
type Data1 = Student10 | student1
const Biodata1:Data1={
  name:"Dhyey",
  district:"Rajkot",
  state:"Gujarat",
};
console.log(Biodata1);

console.log("..................................................");
interface Studen10{
    name:string;
    age:number;
};
interface Studen10{
    village:string;
};
interface studen1{
    district:string;
    state:string;
};
interface DDD extends Studen10,studen1{}
interface DD extends Studen10{}

const B:DD={
    name:"Ravina",
    age:15,
    village:"vinzivad",
};
console.log(B);
const biodata:DDD={
    name:"Hem",
    age:15,
    village:"vinzivad",
    district:"Surat",
    state:"GUjarat",
};
console.log(biodata);

console.log("......................");
class biodat implements Studen10{
    constructor(
     public name:string,
     public age:number,
     public village:string,
     public state:string,
    ){}
}
const STD1= new biodat("dhayana",29,"Vinzivad","Gujarat"); 
console.log(STD1);
console.log(biodat);
