import { ClienteMolde } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

// ? cria o novo cliente de acordo com a molde com todos os valores indefinidos.
const cliente1 = new ClienteMolde('Lucas', 2332344456); 
const cliente2 = new ClienteMolde('Sergio', 22233344456);

const contaCorrenteLucas = new ContaCorrente(1004, cliente1);
const contaCorrenteSergio = new ContaCorrente(104, cliente2);

// * adicionando dinheiro na conta
contaCorrenteLucas.depositar(500);

// * retirando dinheiro da conta
contaCorrenteLucas.sacar(50);

// * transferindo dinheiro da conta
contaCorrenteLucas.transferir(200, contaCorrenteSergio); 

// * contador de contas
console.log(ContaCorrente.numeroDeContas);

console.log(contaCorrenteLucas);
console.log(contaCorrenteSergio.getCliente);