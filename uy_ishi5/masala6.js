const maxWord = function(arr){
    maxW = ""
    for (let i of arr){
        if (i.length > maxW.length)    maxW = i;
    }

    return maxW
}

console.log(maxWord(["asdfas", "sfasfasas", "asfa"]))