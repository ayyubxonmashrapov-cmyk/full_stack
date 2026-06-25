const objMaxNarx = (obj) => {
    return Object.entries(obj).reduce((a, b) => a[1] < b[1] ? b : a)[0]
}

const mahsulotlar = {
    non: 5000,
    suv: 12000,
    banana: 20000,
    kartoshka: 6000
}

console.log(objMaxNarx(mahsulotlar))