
//SHORTED PROPERTIES IN CLASSES IN OOPS

console.log("--------------------------------------------------------------");
class per{
    constructor(
    public name: any,
    public age:any,
    protected hobbies:any[]
    ){}



introduceparent():string{
    return `hi i'm ${this.name} and i am ${this.age} years old.i love ${this.hobbies.join(",")}.`;
}
}
class aaaa extends per{

constructor(
    name:any,
    age:any,
    hobbies:any[],
    public grade:any
){
    super(name,age,hobbies);
}
introduce():string[]{
    //return  `${super.introduce()}. I am in grade ${this.grade}`;
    return this.hobbies
}
}
const pppp1:per=new per("ansh",12,["reading","speaking"]);
console.log(pppp1.introduceparent());
const stud1:aaaa= new aaaa("ravina",20,["coding","music"],9);
console.log(stud1.introduce());

