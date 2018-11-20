import Vue from 'vue'
import $ from 'jquery'
import mask from 'jquery-mask-plugin'
Vue.directive('mascara', {

  maskPlugin: null,
  params: [ 'valor' ],

  bind () {
    this.maskPlugin = mask
  },

  update (novo, velho) {
    $(this.el).mask(this.params.valor, {
      'translation': {
        '?': {
          pattern: /[0-9]/, optional: true
        }
      }
    })
  }

})
