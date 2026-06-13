function showPropertyDescriptors(obj){
    const result = []
    for (let i in obj){
        result.push(Object.getOwnPropertyDescriptor(obj, i))
    }
    return result
}

const employee = {
    name: "Ayyub",
    age: 19,
    id: 1
}

console.log(showPropertyDescriptors(employee))

