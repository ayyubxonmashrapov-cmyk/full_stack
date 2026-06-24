const ekub = (a, b) => {
    if (a > b){   
        a = a + b; //30 = 12 + 18
        b = a - b; //12 = 30 - 18
        a = a - b; //18 = 30 - 12 
    }

    let ekub = 0;
    for (let i = 0; i <= a; i++){
        if (a % i == 0 && b % i == 0){
            ekub = i;
        }
    }

    return ekub 
}



console.log(ekub(12, 18)) // 6
console.log(ekub(7, 13)) // 1
console.log(ekub(20, 5)) // 5