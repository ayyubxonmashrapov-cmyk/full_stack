class Vehicle {
    constructor(owner){
        this.owner = owner;
    }
}

class Car extends Vehicle {
    constructor(owner, brand, oilPerKm){
        super(owner);
        this.brand = brand;
        this.oilPerKm = oilPerKm;
    }

    getOilPerKm(Km = 1){
        return (this.oilPerKm * Km).toFixed(2);
    }
}

class Bus extends Vehicle {
    constructor(owner, size, oilPerKm){
        super(owner);
        this.size = size;
        this.oilPerKm = oilPerKm;
    }

    getOilPerKm(Km = 1){
        return (this.oilPerKm * Km).toFixed(2);
    }
}

class Truck extends Vehicle {
    constructor(owner, type, oilPerKm){
        super(owner);
        this.type = type;
        this.oilPerKm = oilPerKm;
    }

    getOilPerKm(Km = 1){
        return (this.oilPerKm * Km).toFixed(2);
    }
}

const moshina1 = new Car("you", "Mazda", 1.2);

const moshina2 = new Bus("he", "Mercedes-Benz", 0.8);

const moshina3 = new Truck("someone", "Man", 2.2);


console.log(moshina1.getOilPerKm(2))
console.log(moshina2.getOilPerKm())
console.log(moshina3.getOilPerKm(6))


