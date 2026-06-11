const monthsPassed = function(date) {
    const today = new Date();

    return (
        (today.getFullYear() - date.getFullYear()) * 12 +
        (today.getMonth() - date.getMonth())
    );
}

console.log(monthsPassed(new Date("2025-01-15")));