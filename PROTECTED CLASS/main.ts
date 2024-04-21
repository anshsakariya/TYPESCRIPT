
//PROTECTED CLASS
console.log("================================");
class pers{
    public name: any;
    age:any;
    protected hobbies:any[];

constructor(name:any,age:any,hobbies:any){
    this.name=name;
    this.age=age;
    this.hobbies=hobbies
}

introduceparent():string{
    return `hi i'm ${this.name} and i am ${this.age} years old.i love ${this.hobbies.join(",")}.`;
}
}
class aaa extends pers{
    grade :any;

constructor(name:any,age:any,hobbies:any[],grade:any){
    super(name,age,hobbies);
    this.grade=grade;
}
introduce():string[]{
    //return  `${super.introduce()}. I am in grade ${this.grade}`;
    return this.hobbies
}
}
const ppp1:pers=new pers("ansh",12,["reading","speaking"]);
console.log(ppp1.introduceparent());
const stude1:aaa= new aaa("ravina",20,["coding","music"],9);
console.log(stude1.introduce());
