import Vue from 'vue'
import $ from 'jquery'
import 'jquery-mask-plugin'

/**
* chars used to raw mask :
* 0 - for numeric
* A - for alphabetical and numerical
* 9 - numeric optional
* S - alphabetic char
* modifiers to use :
* clear: to clean the input if not match the mask
* reverse: to reverse the input typing
*/
export default Vue.directive('mask', {

  bind (el, bindings, vnode) {
    let config = {
      mask: bindings.value.mask || bindings.value,
      clearIfNotMatch: bindings.modifiers.clear,
      reverse: bindings.modifiers.reverse
    }

    $(el).mask(config.mask, Object.assign(config, {
      translation: {
        '0': {pattern: /\d/},
        '9': {pattern: /\d/, optional: true},
        '#': {pattern: /\d/, recursive: true},
        'A': {pattern: /[a-zA-Z0-9]/},
        'S': {pattern: /[a-zA-Z]/}
      }
    }))
  }
})
