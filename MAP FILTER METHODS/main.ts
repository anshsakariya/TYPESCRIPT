//MAP FILTER METHODS

//doubling each number

const num:number[]=[1,2,3,4,5,6]
const double:number[]= num.map((curval:number)=>curval*2)
console.log(double);

//convert number to string
const n:number[]=[1,2,3,10,5,6]
const numbertostring:string[]=n.map((curelm:number)=>curelm.toString())
console.log(numbertostring) 


const a:number[]=[1,2,3,10]
const numtostring = a.map((curelm:number)=>curelm > 3)
console.log(numtostring)


//filter methods

//filter even number
const x:number[]=[1,2,3,10]
const evennumber:number[]=x.filter((curelm:number)=>curelm  % 2 === 0 )
console.log(evennumber)

//filtering  number greather than 3
const y:number[]=[1,2,3,10,7,8]
const numbergreatherthenthree = y.filter((curelem:number)=>curelem > 3)
console.log(numbergreatherthenthree)


