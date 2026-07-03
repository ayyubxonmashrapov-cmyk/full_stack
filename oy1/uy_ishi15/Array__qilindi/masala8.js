const avg = (arr) => {
    return arr.reduce((a, b) => (a + b))  / arr.length 
}

console.log(avg([1,2,3,4,5]))