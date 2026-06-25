function addEmailToObj(obj, email){
    obj['email'] = email;
}

const obj = {
    ism: "ali",
    yosh: 12,
    guruh: 2
}

addEmailToObj(obj, "something@gmail.com");

console.log(obj.email)