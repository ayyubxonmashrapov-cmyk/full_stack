const users = [
    { name: "Ali" },
    { name: "Vali" },
    { name: "Hasan" }
];

const lastLogin = new WeakMap();

lastLogin.set(users[0], "2026-06-10 09:30");
lastLogin.set(users[1], "2026-06-10 11:15");
lastLogin.set(users[2], "2026-06-10 14:50");