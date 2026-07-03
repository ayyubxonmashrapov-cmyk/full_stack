const product = {};

Object.defineProperties(product, {
    name: {
        value: "Ayyub",
        writable: false,
        configurable: false,
        enumerable: true
    },
    age: {
        value: 19,
        writable: false,
        configurable: false,
        enumerable: true
    },
    id: {
        value: 1,
        writable: false,
        configurable: false,
        enumerable: true
    }
});

delete product.id
product.name = "Ali"

console.log(product);