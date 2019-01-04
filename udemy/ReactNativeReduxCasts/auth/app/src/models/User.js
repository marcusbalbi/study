import axios from 'axios'

export default {
  CreateUser ({ email, password }) {
    return new Promise((resolve, reject) => {
      axios.post('http://192.168.0.7:3000/users', { email, password })
        .then(resolve)
        .catch(reject)
    })
  }
}