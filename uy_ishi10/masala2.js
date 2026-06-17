class User {
    static count = 0;
    constructor(name, age){
        ++User.count;
        this.name = name;
        this.age = age;
    }
    
    static getUserCount(){
        return User.count;
    }
}

const user1 = new User();
console.log(User.getUserCount())
const user2 = new User();
const user3 = new User();
console.log(User.getUserCount())