function areAllJuft(n) {
    while (n){
        lastNum = n % 10;
        if (n % 2) break; 
        n /= 10, n -= n%1;
    }
    return n ? false : true;
}

console.log(areAllJuft(824221))