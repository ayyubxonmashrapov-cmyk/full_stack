class Product {
    constructor(type){
        this.type = type;
    }
}

class Food extends Product {
    constructor(type, expirationDays){
        super(type);
        this.expirationDays = expirationDays;
    }

    isYaroqli(){
        return this.expirationDays > Date.now()
    }
}

const ONEYEAR = 365 * 24 * 60 * 60 * 1000;

const date = new Date(2027, 1, 1);

const sushki = new Food("Suhski", date);

console.log(sushki.isYaroqli())