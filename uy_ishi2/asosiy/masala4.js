function reversNum(n) {
    let newNum = 0;
    while (n){
        newNum = newNum * 10 + n%10;
        n /= 10, n -= n%1
    }
    return newNum;
}

console.log(reversNum(12345))