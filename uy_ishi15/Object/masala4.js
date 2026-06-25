const obj = {
    ism: "ali",
    yosh: 12,
    guruh: 2
}

const deleteProperty = (obj, key) => {
    delete obj[key];
}

deleteProperty(obj, 'ism');

console.log(obj)