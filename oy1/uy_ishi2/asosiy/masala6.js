function isArmstrong(n) {
    let sum = 0;
    let lastDigit;
    let copyN = n;
    while(n){
        lastDigit = n % 10;
        n = Math.floor(n/10);
        sum += lastDigit ** 3;
    }
    if (sum == copyN){
        return true
    }else return false
}

console.log(isArmstrong(152))