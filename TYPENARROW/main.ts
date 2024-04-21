//TYPE NARROWING
console.log("---------------------------");
const favHobbies : (hobby:string | string[])  => void[] | undefined = (hobby:string | string[]) : void[] | undefined =>{
if(Array.isArray(hobby)){
    return hobby.map( () : void =>{});
}else{
    console.log(hobby);
}
}; 
favHobbies("coding");
favHobbies(['coding','games']);
