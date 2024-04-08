class InsuficientBalanceError extends Error {}
class InvalidAccountError extends Error {}


export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log('Depósito realizado com sucesso!');
    }
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus() && this.balance >= amount) {
      this.balance -= amount;
      console.log('Saque realizado com sucesso!');
    } else {
      throw new InsuficientBalanceError('Saldo insuficiente ou conta inválida.');
    }
  };

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new InvalidAccountError('Conta inválida')
  }

}
