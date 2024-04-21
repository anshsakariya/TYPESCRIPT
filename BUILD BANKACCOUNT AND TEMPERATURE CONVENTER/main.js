"use strict";
//BUILD BANKACCOUNT AND TEMPERATURE CONVENTER
console.log("=================================");
class bankaccount {
    _balance = 0;
    get balance() {
        return this._balance;
    }
    set balance(newBalance) {
        if (newBalance < 0) {
            throw new Error("Invalid balance");
        }
        this._balance = newBalance;
    }
}
const account = new bankaccount();
account.balance = 10;
console.log(account.balance);
console.log("=================================");
class temperature {
    _celsius = 0;
    get celcius() {
        return this._celsius;
    }
    set celcius(newcelsius) {
        this._celsius = newcelsius;
    }
    get fathrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
    set fathrenheit(newFah) {
        this._celsius = ((newFah - 32) * 5) / 9;
    }
}
const temp = new temperature();
temp.celcius = 25;
console.log(temp.fathrenheit);
temp.fathrenheit = 77;
console.log(temp.celcius);
