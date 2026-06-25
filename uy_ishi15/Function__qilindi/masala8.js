const faktorial = (n) => {
    if (!n)
        return 1;

    return n * faktorial(n-1)
}

console.log(faktorial(10))