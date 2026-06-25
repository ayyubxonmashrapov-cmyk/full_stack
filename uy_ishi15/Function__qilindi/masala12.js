function mnojitel(a){
    return function(b){
        return a * b;
    }
}

const beshniKopaytir = mnojitel(5);
console.log(beshniKopaytir(5));
