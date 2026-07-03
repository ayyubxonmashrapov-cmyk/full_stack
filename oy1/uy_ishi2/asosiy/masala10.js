function keysSum(obj) {
    let sum = 0
    for (let key in obj){
        typeof obj[key] == typeof 0 ? sum += obj[key] : NaN
    }
    return sum
}

obj = {
name: "Ali",
age: 20,
score: 95
}

console.log(keysSum(obj))

