function fibonachchi(n){
    const result = [];

    if (n > 0) result.push(0);

    if (n > 1) result.push(1);

    let f1 = 0;
    let f2 = 1;
    for (let i = 2; i < n; i++){
        result.push(f1 + f2)
        let temp = f2;
        f2 = f1 + f2;
        f1 = temp;
    }

    return result
}

console.log(fibonachchi(5)) // [0, 1, 1, 2, 3]
console.log(fibonachchi(1)) // [0]
console.log(fibonachchi(7)) // [0, 1, 1, 2, 3, 5, 8]