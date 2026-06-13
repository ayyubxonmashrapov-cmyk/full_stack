const product = {};

Object.defineProperties(product, {
    name: {value: "Ayyub"},
    age: {value: 19},
    id: {value: 1}
});

console.log(product)
console.log(product.name)
console.log(product.age)
console.log(product.id)

//barchasida enumerable: false.        enumerable: true     yo'q
//barchasida writable va configuretable ham false