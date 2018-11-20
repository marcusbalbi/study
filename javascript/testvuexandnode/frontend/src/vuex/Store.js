import Vuex from 'vuex'
import Vue from 'vue'
import Counter from '@/model/Counter'
Vue.use(Vuex)
const Store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    CHANGE_COUNTER (state, newValue) {
      state.count = newValue
    }
  },
  actions: {
    increment (context) {
      Counter.increment().then((res) => {
        context.commit('CHANGE_COUNTER', res.counter)
      })
    },
    decrement (context) {
      Counter.decrement().then((res) => {
        context.commit('CHANGE_COUNTER', res.counter)
      })
    },
    initial (context) {
      Counter.getCounter().then((res) => {
        context.commit('CHANGE_COUNTER', res.counter)
      })
    }
  }
})

export default Store
