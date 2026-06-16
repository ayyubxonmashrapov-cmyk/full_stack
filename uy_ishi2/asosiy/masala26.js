const umumiyKeylar = (obj, obj1) => {
    const result = [];

    if(Object.keys(obj1).length < Object.keys(obj).length){
        const objTemp = Object.assign({}, obj1);
        obj1 = Object.assign({}, obj);
        obj = Object.assign({}, objTemp);
    }

    for (let key in obj){
        if (key in obj1){
            result.push(key)
        }
    }

    return result 
}

const obj1 = {
    id: 1,
    name: "Laptop",
    price: 1200,
    stock: 15,
    category: "Electronics",
    discount: 10
};

const obj2 = {
    id: 2,
    stock: 8
};


console.log(umumiyKeylar(obj1, obj2))