function keysSum(obj) {
    let sum = 0
    for (let key in obj){
        sum += obj[key]
    }
    return sum
}

obj = {
math: 85,
physics: 90,
english: 78
}

console.log(keysSum(obj))

