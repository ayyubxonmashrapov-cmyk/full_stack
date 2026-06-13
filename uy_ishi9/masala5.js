class Device {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
}

class Laptop extends Device {
    constructor(brand, model, ram){
        super(brand, model);
        this.ram = ram;
    }

    ramInfo(){
        return (this.ram >= 16) ? "High Performance" : "not High Performance";
    }
}

const laptop1 = new Laptop("Apple", 10, 8);

console.log(laptop1.ramInfo())