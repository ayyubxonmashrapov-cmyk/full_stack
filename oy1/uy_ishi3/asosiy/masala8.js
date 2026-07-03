let n = 12345;

let arr = String(n).split("");

let arr1 = [];

for (let num of String(n)){
    if (!arr1.includes(num)){
        arr1.push(num)
    }
}

console.log(arr.length == arr1.length)