class Vehicle {
    constructor(name){
        this.name = name;
    }
}

class Taxi extends Vehicle {
    constructor(name, pricePerKm){
        super(name);
        this.pricePerKm = pricePerKm;
    }

    getPricePerKm(Km = 1){
        return this.pricePerKm * Km;
    }
}

const ali = new Taxi("tiko", 12);

console.log(ali.getPricePerKm(5))

