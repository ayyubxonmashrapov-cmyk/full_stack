const expression = function(year=2026){
    const date = new Date(year, 2 , 0).getDate();

    return date == 29;
}

console.log(expression(2001))

