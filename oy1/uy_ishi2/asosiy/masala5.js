function keysSum(obj) {
    return Math.max(...Object.values(obj))
}

obj = {
math: 85,
physics: 90,
english: 100
}

console.log(keysSum(obj))

