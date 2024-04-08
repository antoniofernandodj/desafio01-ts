import { DioAccount } from "./DioAccount";

export class ContaPersonalizada extends DioAccount {
    deposito = (amount: number): void => {
        if (this.validateStatus()) {
          this.deposit(amount + 10);
          console.log('Depósito de', amount, 'realizado com sucesso!');
        }
    };
}