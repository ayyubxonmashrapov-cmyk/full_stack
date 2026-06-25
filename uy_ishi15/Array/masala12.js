const manfiyMusbat = function(arr){
    const result = {
        "musbat" : [],
        "manfiy" : []
    } 
    for (let i of arr){
        if (i < 0){
            result.musbat.push(i)
        }else result.manfiy.push(i)
    }

    return result
}

console.log(manfiyMusbat([1,-1,2,-2]))