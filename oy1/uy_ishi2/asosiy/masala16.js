function culcSum(obj) {
    let max = 0, max1;
    for (let [key, value] of Object.entries(obj)){
        if (max < value) {
            max1 = key;
            max = value;
        }
    }
    return max1
}


obj = {
ali: 78,
vali: 95,
sami: 88
}
console.log(culcSum(obj))