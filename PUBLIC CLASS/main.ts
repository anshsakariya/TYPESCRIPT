
console.log("+++++++++++++++++++++++++++++++++++++++");
//PUBLIC PROTECTED & PRIVATE AND ACCESS MODIFIERS

//parent class

//class person5{ }

//child class
//class student extends Pers{ }

//PUBLIC CLASS
class perso{
    public name: any;
    age:any;
    hobbies:any[];

constructor(name:any,age:any,hobbies:any){
    this.name=name;
    this.age=age;
    this.hobbies=hobbies
}

introduce():string{
    return `hi i'm ${this.name} and i am ${this.age}years old.i love ${this.hobbies.join(",")}.`;
}
}
class sss extends perso{
    grade :any;

constructor(name:any,age:any,hobbies:any[],grade:any){
    super(name,age,hobbies);
    this.grade=grade;
}
introduce():string{
    return  `${super.introduce()}. I am in grade ${this.grade}`;
}
}
const pp1:perso=new perso("ansh",12,["reading","speaking"]);
console.log(pp1.hobbies);
const studen1:sss= new sss("ravina",20,["coding","music"],9);
console.log(studen1.hobbies);
