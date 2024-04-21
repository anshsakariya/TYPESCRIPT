
//GENERICS

function logAndreturn(value: number | string):number | string {
    console.log(value);
    return  value;
}
function logAnd<T>(value:T):T{
    return value
}
const numberresult  : string | number  =  logAndreturn(42);
const stringresult  : string | number  =  logAndreturn("Hello , Generics");
const booleanresult : string | number | boolean = logAnd(true)
const number:number = logAnd<number>(44);
const string :string = logAnd<string>("HELLO GENERICS");
const boolean : boolean =logAnd<boolean>(true);

console.log(numberresult);
console.log(stringresult);
console.log(booleanresult);
console.log(number);
console.log(string);
console.log(boolean);

function add(a:number, b:number):number;
function add(a:string, b:string):string;
function add(a:any, b:any):any{
    return a+b;
}
const r1:number = add(5, 10);
const r2:string = add("Hello", " world");

console.log(r1);
console.log(r2);

