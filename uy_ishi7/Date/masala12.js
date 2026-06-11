(function(year) {
    const days = [
        "Yakshanba",
        "Dushanba",
        "Seshanba",
        "Chorshanba",
        "Payshanba",
        "Juma",
        "Shanba"
    ];

    const date = new Date(year, 0, 1);

    console.log(days[date.getDay()]);
}(2026))

