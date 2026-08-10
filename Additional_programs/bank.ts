//Create a BankAccount Class with deposit(), withdraw(), and displayBalance() Methods

class BankAccount {
    balance: number;
    constructor(balance: number) {
        this.balance = balance;
    }
    deposit(amount: number): void {
        this.balance = this.balance + amount;
    }
    withdraw(amount: number): void {
        this.balance = this.balance - amount;
    }
    displayBalance(): void {
        console.log("Balance: " + this.balance);
    }
}
let account = new BankAccount(5000);
account.deposit(1000);
account.withdraw(500);
account.displayBalance()