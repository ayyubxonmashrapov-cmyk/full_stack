const armstrong = (n) => {
    let copy = n;
    let pow = 0
    while (copy){
        ++pow;
        copy /= 10, copy -= copy % 1;
    }
    let result = 0;
    copy = n
    while (copy){
        result += (copy%10) ** pow;
        copy /= 10, copy -= copy % 1;
    }

    return n == result
}



console.log(armstrong(153)) // true (1+125+27)
console.log(armstrong(370)) // true
console.log(armstrong(100)) // false