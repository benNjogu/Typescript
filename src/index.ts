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

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value < 0) throw new Error("Invalid value");
    this._balance = value;
  }
}

let account = new Account(1, "Ben", 980);
account.balance = 250;
account.deposit(1000);
console.log(account.balance);
