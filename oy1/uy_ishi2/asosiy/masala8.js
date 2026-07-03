function keysSum(obj) {
    return Object.keys(obj).sort();
}

obj = {
math: 85,
physics: 90,
english: 78
}

console.log(keysSum(obj))
