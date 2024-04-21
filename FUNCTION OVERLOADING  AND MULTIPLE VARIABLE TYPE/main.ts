
// FUNCTION OVERLOADING  AND MULTIPLE VARIABLE TYPE

//GENERICS
function ad<s>(a:s,b:s):void{
    console.log(typeof a);
    console.log(typeof b);
}

const result1: void = ad<number>(5,10);
const result2: void = ad("hello", "world");

console.log("==========================");

function aa<T,U>(c:T,d:U,e:boolean):void{
    console.log(typeof c);
    console.log(typeof d);  
    console.log(typeof e);

}
const result3: void = aa(5,"thapa",true);
const result4: void = aa<string,number>("thapa",6,false);

