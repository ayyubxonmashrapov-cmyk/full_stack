function culcSum(n) {
    let n1 = [];
    let sum;
    for (let i = 1; i < n; i++){
        sum = 0;
        let a = i;
        while (a){               
            lastdigit = a%10;
            sum += lastdigit;
            a = a/10, a -= a%1;   
        }
        (sum == 10) ? n1.push(i) : NaN
    }
    return n1;
}

console.log(culcSum(90))