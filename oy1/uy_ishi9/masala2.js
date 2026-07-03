class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class ElectronicProduct extends Product {
    constructor(name, price, warranty){
        super(name, price);
        this.warranty = warranty;
    }
    useWarranty(){
        return this.price * (1 - this.warranty / 100)
    }
}

const phone = new ElectronicProduct("Redme", 180, 15);

console.log(phone.useWarranty())