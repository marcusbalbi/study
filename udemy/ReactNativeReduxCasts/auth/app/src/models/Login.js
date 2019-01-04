import axios from 'axios'

let user = null
let loginStateChange = () => {}
export default {
  login ({email, password}) {
    return new Promise((resolve, reject) => {
      axios.post('http://192.168.0.7:3000/login', { email, password })
        .then((pRes) => {
          user = pRes
          loginStateChange(user)
          resolve(pRes)
      })
        .catch(reject)
    })
  },
  logout () {
    return new Promise((resolve, reject) => {
      axios.delete('http://192.168.0.7:3000/login', { email, password })
        .then(() => {
          user = null
          loginStateChange(user)
          resolve(true)
        })
        .catch(reject)
    })
  },
  onLoginStateChange (callback) {
    loginStateChange = callback
  }
}
