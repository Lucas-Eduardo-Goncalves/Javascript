import { ClienteMolde } from "./Cliente.js";

export class ContaCorrente { // ? A classe apenas representa um objeto, não é o objeto em si.
  agencia;

  static numeroDeContas = 0;

  #cliente;
  #saldo = 0; 
  // ! o "#" faz com que a variavel seja privada, porém a convenção dos programadores também utilizam o "_" apenas para representação
  // ! this infere no objeto em si que foi criado já quando se utiliza o static é relacionado a aquele class como um todo.

  constructor(agencia, cliente) {
    this.agencia = agencia;
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
    conta.depositar(valorSacado)
  }

  set setCliente(novoValor) {
    if(novoValor instanceof ClienteMolde) this.#cliente = novoValor;
  }

  get getCliente() {
    return this.#cliente
  }

  get getSaldo() {
    return this.#saldo
  }
};