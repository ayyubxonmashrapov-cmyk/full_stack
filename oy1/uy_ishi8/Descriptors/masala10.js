const emploee = {
    name: "Ayyub",
    age: 19,
    id: 1
}


Object.defineProperty(emploee, 'name', {enumerable: false});
Object.defineProperty(emploee, 'age', {enumerable: false});
Object.defineProperty(emploee, 'id', {enumerable: false});

for (let i in emploee){
    console.log(i)
}
//hechnarsa

for (let i of Object.keys(emploee)){
    console.log(emploee[i])
}
//hechnarse