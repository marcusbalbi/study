import Vue from 'vue'

Vue.directive('validator', {

  bind () {
    console.log('deu bind')
  },

  update (novo, velho) {
    console.log(novo, velho)
  }

})

Vue.directive('validate', {

  validacoes: [],

  bind () {
    this.validacoes = this.expression.split(',')
    console.log(this)
  },

  update (novo, velho) {
    console.log(novo, velho)
    this.el.addEventListener('keyup', this.validar.bind(this))
  },

  validar () {
    let value = this.el.value

    if (value !== '') {
      // alert('diferente de vazio')
    }
  }

})
