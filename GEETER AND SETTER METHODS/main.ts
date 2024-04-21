
//GEETER AND SETTER IN TYPESCRIPT

console.log("-----------------------------------------");

class pe{
    private _age:number | undefined;

    constructor(
        public name:string,
        protected hobbies:string[]
    ){ }
    public set age(age:number){
         if(age>150 || age<0){
           throw new Error("age is not valid")
         }
         this._age=age;
    }

    public get age():number{
        if(this._age === undefined){
            throw new Error("age is not define")
        }
        return this._age;
    }
introduceparent():string{
    return `hi i'm ${this.name} and i am ${this._age} years old.i love ${this.hobbies.join(",")}.`;
}
}
const x1:pe=new pe("ansh",["reading","speaking"]);
//x1.age(521);//not valid
x1.age=21;
console.log(x1.introduceparent());
console.log(x1.age);
