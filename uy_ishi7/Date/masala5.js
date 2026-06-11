const ONEDAY = 24 * 60 * 60 * 1000;


function before50Days(){
    const now = Date.now()

    return new Date(now - 50 * ONEDAY)
}

console.log(before50Days())