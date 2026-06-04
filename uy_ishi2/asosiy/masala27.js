function culcSum(n) {
    let divisors = []
    for (let i = 1; i <= n; i++){
        !(n % i) ? divisors.push(i) : NaN
    }
    return divisors
}

console.log(culcSum(8))