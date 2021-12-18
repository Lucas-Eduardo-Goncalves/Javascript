import { ClienteMolde } from "./Cliente.js";

export class ContaCorrente { // ? A classe apenas representa um objeto, não é o objeto em si.
  #agencia;
  #cliente;
  #saldo = 0; 

  static numeroDeContas = 0;

  constructor(agencia, cliente) {
    this.#agencia = agencia;
    ContaCorrente.numeroDeContas += 1;
    if(cliente instanceof ClienteMolde) this.#cliente = cliente;
  }

  sacar(valor) {
    if(this.#saldo >= valor) this.#saldo -= valor;
  }

  depositar(valor) {
    if(valor <= 0) return;
    this.#saldo += valor; 
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }

  set setCliente(novoValor) {
    if(novoValor instanceof ClienteMolde) this.#cliente = novoValor;
  }

  get getCliente() {
    return this.#cliente;
  }

  get getSaldo() {
    return this.#saldo;
  }

  get getAgencia() {
    return this.#agencia;
  }
};