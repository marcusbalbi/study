import Vue from 'vue'
import App from './App'

Vue.filter('cargo', function (pessoas, cargo) {
  return pessoas.filter(function (pessoa) {
    return pessoa.cargo === cargo
  })
})

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
