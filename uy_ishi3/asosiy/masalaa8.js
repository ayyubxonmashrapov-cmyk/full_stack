const user = {
  password: "125wer678",
  isStrongPassword() {
    return this.password.length >= 8
  }
};

console.log(user.isStrongPassword());