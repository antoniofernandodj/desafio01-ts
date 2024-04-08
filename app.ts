import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { ContaPersonalizada } from './class/ContaPersonalizada';

// Criando instâncias das contas
const individualAccount = new PeopleAccount(990545, 'João', 123456);
const companyAccount = new CompanyAccount('Empresa X', 987654);
const customAccount = new ContaPersonalizada('Conta Personalizada', 13579);

// Testando métodos
individualAccount.deposit(500);
individualAccount.withdraw(200);
individualAccount.getBalance();

companyAccount.getLoan(10000);
companyAccount.deposit(5000);
companyAccount.getBalance();

customAccount.deposit(100);
customAccount.getBalance();

// Depósito realizado com sucesso!
// Saque realizado com sucesso!
// 300
// Depósito realizado com sucesso!
// Empréstimo de: 10000
// Voce pegou um empréstimo
// Depósito realizado com sucesso!
// 15000
// Depósito realizado com sucesso!
// 100