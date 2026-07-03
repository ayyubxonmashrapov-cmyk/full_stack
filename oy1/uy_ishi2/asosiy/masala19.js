function culcSum(n) {
    let sum = 0;
    for (let i = 1; i < n; i++){
        !(i % 2) ? sum+=i : NaN 
    }
    return sum == n ? true : false;
}

console.log(culcSum(6))