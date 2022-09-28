class Account {
  nickName?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");

    this._balance += amount;
  }

  private calculateTax() {}

  getBalance(): number {
    return this._balance;
  }
}

let account = new Account(1, "Ben", 980);
account.deposit(1000);
console.log(account.getBalance);
