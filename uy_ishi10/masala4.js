class Product {
    static products = [];
    
    constructor(name, price){
        Product.products.push(name);
        this.name = name;
        this.price = price;
    };
    
    static getAllProducts(){
        return Product.products
    };
};

const p1 = new Product("olma", 1000);
console.log(Product.getAllProducts());

const p2 = new Product("banan", 3000);
const p3 = new Product("nok", 1500);
console.log(Product.getAllProducts());