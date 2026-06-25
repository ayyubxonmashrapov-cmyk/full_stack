const myFunc = (n1) => {
    return function(n2){
        return n1 + n2
    }
}

const slagaemoe1 = myFunc(5);
console.log(slagaemoe1(5))