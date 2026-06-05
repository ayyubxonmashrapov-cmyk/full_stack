let n = 12345;

let arr = String(n).split("")

let b = arr[0]
arr[0] = arr.at(-1) 
arr[arr.length - 1] = b

console.log(+arr.join(""));