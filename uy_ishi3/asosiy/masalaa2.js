const account = {
  balance: 500000,
  canWithdraw(amount) {
    return this.balance >= amount;
  }
};

console.log(account.canWithdraw(500001));