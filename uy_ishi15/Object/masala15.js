const formatObj = (obj) => {
    const result = [];
    for (let [key, value] of Object.entries(obj)){
        result.push(`${key}: ${value}`);
    };
    return result;
}

console.log(formatObj({a:1,b:'x',c:3}))