function culcSum(n) {
    let count = 0
    for (let i = 1; i <= n; i++){
        !(n % i) ? ++count : NaN
    }
    return count
}

console.log(culcSum(12))