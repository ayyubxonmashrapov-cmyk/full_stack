const emploee = {
    name: "Ayyub",
    age: 19,
    id: 1
}

for (let i in emploee){
    console.log(Object.getOwnPropertyDescriptor(emploee, i))
}
