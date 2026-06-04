function culcSum(n) {
    let zapas = n;
    let newN = 0;
    while(n){
        lastDigit = n%10;
        newN = newN * 10 + lastDigit;
        n /= 10, n -= n%1;
    }
    return newN == zapas ? true : false
}

console.log(culcSum(8980))