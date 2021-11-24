export class ClienteMolde { // ? A classe é um molde falando o que eu quero ter quando o objeto é criado.
  nome;
  #cpf;

  get getCpf() {
    return this.#cpf
  }

  constructor(nome, cpf) {
    this.nome = nome;
    this.#cpf = cpf;
  }
};