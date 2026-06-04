function culcSum(n) {
    onestr = ""
    for (value of Object.values(n)){
        typeof value == typeof "" ? onestr += value : NaN
    }
    return onestr;
}

obj = {
name: "Ali",
age: "20",
score: 95
}

console.log(culcSum(obj))