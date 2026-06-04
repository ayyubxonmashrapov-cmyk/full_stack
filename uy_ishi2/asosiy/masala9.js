function countUnli(words) {
    let count = 0;
    for (let latter of words){
        ['a','e','u','i','o'].includes(latter) ? ++count : NaN 
    }
    return count
}

console.log(countUnli("aaaaaa"))