
//BUILD BANKACCOUNT AND TEMPERATURE CONVENTER

console.log("=================================");
class bankaccount{
    private _balance:number=0;
    public get balance(): number{
        return this._balance;
    }
    public set balance (newBalance:number){
        if(newBalance<0){
            throw new Error("Invalid balance")
        }
        this._balance=newBalance;
    }
}
const account = new bankaccount();
account.balance= 10;
console.log(account.balance);

console.log("=================================");
class temperature{
    private _celsius : number = 0;
    public get celcius():number{
        return this._celsius;
    }
    public set celcius(newcelsius:number) {
        this._celsius=newcelsius;
    } 
    public get fathrenheit():number{
        return (this._celsius * 9)/5+32;
    }
    public set fathrenheit(newFah:number){
        this._celsius=((newFah- 32)*5)/9;
    }
}
const temp  =  new temperature();
temp.celcius=25;
console.log(temp.fathrenheit);
temp.fathrenheit=77;
console.log(temp.celcius);

