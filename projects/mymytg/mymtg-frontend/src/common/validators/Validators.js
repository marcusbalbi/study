// import Vue from 'vue'
// import VueValidator from 'vue-validator'

// Vue.use(VueValidator)
// // `email` custom validator global registration
// Vue.validator('email', {
//   message: 'invalid email address', // error message with plain string
//   check: function (val) { // define validator
//     return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
//   }
// })

// // build-in `required` validator customization
// Vue.validator('required', {
//   message: function (field) { // error message with function
//     return 'This field is required'
//   },
//   check: Vue.validator('required') // re-use validator logic
// })
