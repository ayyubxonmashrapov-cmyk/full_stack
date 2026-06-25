function timeFormat(sec){
    let min = Math.floor(sec/60)
    sec %= 60;
    return `${min > 10 ? min : "0" + min}:${sec > 10 ? sec : "0" + sec}`
}

console.log(timeFormat(753))