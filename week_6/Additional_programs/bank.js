"use strict";
//Create a BankAccount Class with deposit(), withdraw(), and displayBalance() Methods
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
    }
    withdraw(amount) {
        this.balance = this.balance - amount;
    }
    displayBalance() {
        console.log("Balance: " + this.balance);
    }
}
let account = new BankAccount(5000);
account.deposit(1000);
account.withdraw(500);
account.displayBalance();
