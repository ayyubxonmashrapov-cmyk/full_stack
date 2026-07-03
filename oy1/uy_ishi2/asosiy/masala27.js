const sonTubBoluvchilari = function(n){
    const result = [];
    for (let i = 2; i < Math.ceil(n/2); i++){
        if (n % i == 0){
            let tubmi = true;
            for (let j = 2; j < Math.ceil(i/2); j++){
                if (i % j == 0){
                    tubmi = false;
                    break;
                }
            }

            if (tubmi){
                result.push(i)
            }
        }
    }

    return result
}

console.log(sonTubBoluvchilari(30))