function sonliUchburchak(n){
    let result = '';
    for (let i = 1; i <= n; i++){
        let qator = '';
        for (let j = 1; j <= i; j++){
            qator += `${j}`;
        }
        result += qator;
        result += '\n'
    }
    return result
}

console.log(sonliUchburchak(15))