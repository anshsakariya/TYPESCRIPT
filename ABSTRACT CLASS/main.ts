//ABSTRACT CLASSES
interface perobj{
    name:string;
    age:number;
}
const Person:{name:string;age:number}={
    name:"Ansh",
    age:29,
};
const Person1:perobj={
    name:"Dhyey",
    age:20,
};
const Person2:perobj={
    name:"Hem",
    age:15,
};

//circle , rectangle

abstract class shape{
    constructor(protected color:string){}
    abstract calculateArea():number;
    abstract displayArea:()=> void;
}
class Circle extends shape{
    constructor(protected color:string,protected radius:number){
       super(color);
    }
public calculateArea():number{
 return Math.PI * this.radius  *this.radius;   
}
displayArea: () => void = ():void =>{
    console.log(`this is a ${this.color} circle with radius ${this.radius}.`);
};
}

const circle = new Circle("red",5);
console.log(circle.calculateArea());
circle.displayArea;
