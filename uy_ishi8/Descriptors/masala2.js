const emploee = {
    name: "Ayyub",
    age: 19,
}

for (let i in emploee){
    console.log(Object.getOwnPropertyDescriptor(emploee, i))
}