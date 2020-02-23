import Pessoa from './Pessoa.js'

export default class PessoaController {
  constructor (form, list) {
    this.form = form
    this.list = list
    this.pessoas = []
    this.initEvents()
  }
  initEvents () {
    this.form.onsubmit = (event) => {
      this.cadastrar(event)
    }
    this.resetarForm()
    this.form[0].onkeyup = () => {
      let q = this.form[0].value
      this.renderizarLista(this.pessoas.filter(p => {
        return q === '' || (p.nome.includes(q) || p.sobrenome.includes(q))
      }))
    }
  }
  cadastrar (event) {
    event.preventDefault();
    const p = new Pessoa({
      nome: event.target[0].value,
      sobrenome: event.target[1].value
    })
    this.pessoas.push(p)
    this.renderizarLista();
    this.resetarForm()
  }
  resetarForm () {
    this.form[0].value = ''
    this.form[1].value = ''
    this.form[0].focus();
  }
  renderizarLista (lista) {
    const l = lista || this.pessoas
    this.list.innerHTML = l.map(p => {
      return `
        <li>${p.obter()}</li>
      `
    }).join('')
  }
}