const unliUndosh = (arr) => {
    const result = {
        a: [],
        b: []
    }

    for (let i of arr){
        if ('aiueoAIOEU'.includes(i[0])){
            result.a.push(i)
        }else result.b.push(i)
    }

    return result
}

console.log(unliUndosh(['olma','anor','behi']))