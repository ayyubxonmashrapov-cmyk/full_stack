function propertyBormi(obj, key){
    for (let i in obj){
        if (i === key)return true
    }
    return false
}

console.log(propertyBormi({ism:'Ali'}, 'age'))