function daysUntilBirthday(birthDate) {
    const today = new Date();

    let birthday = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate(),
    );

    if (birthday < today) {
        birthday.setFullYear(today.getFullYear() + 1);
    }

    return Math.ceil((birthday - today) / 86400000);
}

console.log(daysUntilBirthday(new Date(2006)))