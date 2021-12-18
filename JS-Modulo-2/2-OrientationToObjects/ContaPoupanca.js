export class ContaPoupança {
  #saldoInicial;
  #cliente;
  #agencia;

  constructor(saldoInicial, cliente, agencia) {
    this.#saldoInicial = saldoInicial;
    this.#cliente = cliente;
    this.#agencia = agencia;
  }
};