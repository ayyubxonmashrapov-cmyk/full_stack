const countVowels = (text) => {
    const words = text.split(" ");
    const result = {};
    
    for (let word of words){
        let count = 0;
        
        for (let latter of word){
            if (['a','i','u','o','e'].includes(latter))
                ++count;
            
        }
        result[word] = count;
    }
    
    return result;
}


console.log(countVowels("Salom Dunyo"));

console.log(countVowels("JavaScript"));