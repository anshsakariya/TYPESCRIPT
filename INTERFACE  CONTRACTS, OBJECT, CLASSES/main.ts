
//INTERFACE  CONTRACTS, OBJECT, CLASSES

interface Greet {
    name:string;
    age:number
}

const gre:Greet = {
    name:"ansh",
    age:25,
} 


console.log("======================");


interface products {
    name:string;
    price:number;
    quantity:number
}

const product1:products= {
    name:"laptop",
    price:1000,
    quantity:5
}

const product2:products= {
    name:"pc",
    price:10000,
    quantity:10
}


const calculatetotalprices : (product:products)=>number = (product:products):number =>{
    const {price,quantity} = product;
    return price * quantity
}
console.log(calculatetotalprices(product1));
console.log(calculatetotalprices(product2));

