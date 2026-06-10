const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Mouse", price: 30 }
];

const discounts = new WeakMap();

discounts.set(products[0], 10);
discounts.set(products[1], 15); 
discounts.set(products[2], 5);  