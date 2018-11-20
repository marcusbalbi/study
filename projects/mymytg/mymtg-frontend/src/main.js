import Vue from 'vue'
import VueRouter from 'vue-router'
// import MainStore from 'src/common/store/MainStore'
import App from './modules/global/main/components/App'
// import Request from 'common/http/Request'
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
import './common/directives/Directives'
// import './common/validators/Validators'

import cardRoutes from './modules/cards/routes'
import globalRoutes from './modules/global/routes'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes: [...cardRoutes,
    ...globalRoutes]
})

// router.beforeEach((to, from, next) => {
//   Request.getInstance().waitActiteRequests().then(() => { console.log('ok'); return next() }, (err) => { console.log(err) })
// })

// router.afterEach((to, from) => {
//   Request.getInstance().waitActiteRequests().then(() => { console.log('ok') }, (err) => { console.log(err) })
// })

new Vue({
  // store: MainStore,
  router,
  el: '#app',
  render: h => h(App)
})
