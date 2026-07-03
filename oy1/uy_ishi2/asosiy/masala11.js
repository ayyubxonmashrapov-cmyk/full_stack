function fibNum(n) {
    let fNums = []
    let a1 = 0;
    let a2 = 1;

    n > 0 ? fNums.push(0) : NaN;
    n > 1 ? fNums.push(1) : NaN;
    
    while (a1 + a2 < n){
        fNums.push(a1+a2);
        [a1, a2] = [a2, a1+a2];
    }

    return fNums;
}

console.log(fibNum(17))