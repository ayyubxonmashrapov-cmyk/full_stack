function strsLength(arr){
    return arr.reduce((a, b) => a += b.length, a = arr[0].length)
}

console.log(strsLength(["adsfasfsa","fssa","sa","sdfasfasfsa"]))