class Account {
    #password = "";
    
    constructor(login, password){
        this.#password = password;
        this.login = login;
    };

    get checkPassword(){
        return this.#password;
    };
    
    set changePassword(newPassword){
        this.#password = newPassword;
    }
}

const acc = new Account("login" ,"mzlapq10");

console.log(acc.checkPassword);

acc.changePassword = "qpalzm10";

console.log(acc.checkPassword);
