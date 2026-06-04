function countToq(n) {
    let count = 0;
    for (let i = 1; i <= n; i++){
        (i % 2) ? ++count : NaN
    }
    return count
}

console.log(countToq(9))