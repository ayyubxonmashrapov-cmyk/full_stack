function mostFrequentChar(str){
    const words = new Map()
    for (let letter of str){
        if (letter === " ") continue
        if (words.has(letter)){
            words.set(letter, words.get(letter) + 1)
        } else {
            words.set(letter, 1)
        }
    }
    let max = 0
    let l = ""
    for (let [key, val] of words.entries()){
        if (max < val){
            max = val
            l = key
        }
    }
    return {char: l, count: max}
}

console.log(mostFrequentChar("javascript"))