const reverseNum = function(num){
    let result = 0;

    while(num){
        result = result * 10 + num % 10;
        num /= 10; num -= num % 1; 
    }

    return result
}

console.log(reverseNum(123))