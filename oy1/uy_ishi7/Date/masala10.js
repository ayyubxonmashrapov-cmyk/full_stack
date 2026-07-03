const daysLived = function (year) {
    const date = new Date();

    const result = date - year;

    return Math.floor(result / (1000 * 60 * 60 * 24));
}

console.log(daysLived(new Date("2000-01-01")));