function longestCommonPrefix(strs) {
    let word = strs.reduce((a, b) => a.length <= b.length ? a : b);
    let result = "";

    for (let i = 0; i <= word.length; i++) {
        let prefix = word.slice(0, i);
        let starWith = strs.every(w => w.startsWith(prefix));
        if (starWith && prefix.length > result.length) {
            result = prefix;
        }
    }
    return result;
}


console.log(longestCommonPrefix(['flower','flow','flight']))