class LoginSystem {
    #attempts = 0;
    
    static maxAttempts = 3;
    
    constructor(){
        this.#attempts;
    };

    doTry(){
        if (LoginSystem.maxAttempts == this.#attempts ){
            console.log('imkonlar soni tugadi')
            return 0;
        }
        ++this.#attempts; 
        console.log(this.getAttempts)
    };

    resetAttempts(){
        this.#attempts = 0;
    };

    get getAttempts(){
        return `yana ${LoginSystem.maxAttempts - this.#attempts}ta imkon qoldi` ;
    };
};

const user1 = new LoginSystem();

user1.doTry();
user1.doTry();
user1.doTry();
user1.doTry();
user1.resetAttempts()
user1.doTry();
