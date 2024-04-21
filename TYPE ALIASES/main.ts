//TYPE ALIASES

type personn= {
    name:string;
    age:number;
    isstudent:boolean;
    class?:string;  //optional property 
    address:{
        city:string;
        country:string
    }
}
const person1:personn ={
    name: 'DEEPANSHU_NAG',
    age:27,
    isstudent:true,
    address:{
        city:"pune",
        country:'India'
    }
}

const person2:personn={
    name:'DEEPANSHU_NAG',
    age:27,
    isstudent:true,
    address:{
        city:"pune",
        country:'india'
    }
}


type pro={
    name:string;
    price:number;
    quality:number
}
const product: pro={
    name:"laptop",
    price:1000,
    quality:5
}

const calculate = (product:pro)=>{
    return `${product.name} total cost ${product.price*product.quality}`
}
console.log(calculate(product))
