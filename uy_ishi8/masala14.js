const getWritables = (obj) => {
    const result = [];

    const descriptors = Object.getOwnPropertyDescriptors(obj);

    for (let key in descriptors) {
        if (descriptors[key].configurable) {
        result.push(key);
       }
    }

    return result 
}

const employee = {
    name: "Ayyub",
    age: 19,
    id: 1
}

console.log(getWritables(employee))