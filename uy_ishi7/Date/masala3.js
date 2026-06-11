const ONEDAY = 24 * 60 * 60 * 1000;
const ONEYEAR = 365 * 24 * 60 * 60 * 1000;

const arrow = () => {
    const now = Date.now();
    const date = new Date();
    
    let nextYear = (date.getFullYear() - 1970 + 1) * ONEYEAR;
    
    return Math.floor((nextYear - now) / ONEDAY)
}

console.log(arrow())