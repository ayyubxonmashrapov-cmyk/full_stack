const books = [
    { name: "kitob1" },
    { name: "kitob2" },
    { name: "kitob3" }
];

const lastLogin = new WeakMap();

lastLogin.set(users[0], true);
lastLogin.set(users[1], false);
lastLogin.set(users[2], true);