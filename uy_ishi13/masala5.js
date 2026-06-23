function isPalindrom(num){
    let copy = num;
    let result = 0
    while(copy){
        result = result * 10 + copy%10;
        copy /= 10, copy -= copy % 1;
    }

    return result == num;
}

console.log(isPalindrom(11232181))




