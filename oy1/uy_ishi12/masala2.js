function daysBetween(date1, date2){
    return Math.abs(Number(date1.split("-")[2]) - Number(date2.split("-")[2]))
}

console.log(daysBetween("2025-01-01", "2025-01-10"))
console.log(daysBetween("2025-03-10", "2025-03-01"))