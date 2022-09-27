class Account {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickName?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

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



