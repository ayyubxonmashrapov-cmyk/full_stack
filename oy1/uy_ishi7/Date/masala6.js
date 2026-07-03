const ONEDAY = 24 * 60 * 60 * 1000;


const betweenDates = function(date1, date2){
    return Math.abs(date2 - date1) / ONEDAY;
}

const d1 = new Date("2026-06-01");
const d2 = new Date("2026-06-11");

console.log(betweenDates(d1, d2)); // 10