function findArmstrong(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        const digits = String(i).split("");
        const power = digits.length;

        let sum = 0;

        for (let digit of digits) {
            sum += Number(digit) ** power;
        }

        if (sum === i) {
            result.push(i);
        }
    }

    return result;
}

console.log(findArmstrong(10000));