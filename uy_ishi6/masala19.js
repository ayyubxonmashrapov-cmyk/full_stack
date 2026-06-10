const employees = [
    { name: "Ali" },
    { name: "Vali" },
    { name: "Hasan" }
];

const secretIds = new WeakMap();

secretIds.set(employees[0], "EMP-1001");
secretIds.set(employees[1], "EMP-1002");
secretIds.set(employees[2], "EMP-1003");
