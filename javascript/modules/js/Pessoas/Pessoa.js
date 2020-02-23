export default class Pessoa { 
  constructor ({ nome, sobrenome }) {
    this.nome = nome
    this.sobrenome = sobrenome
  }
  obter () {
    return `${this.nome} ${this.sobrenome}`
  }
}