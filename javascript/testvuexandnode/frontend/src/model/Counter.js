export default {
  increment () {
    return fetch('http://localhost:3000/counter', {method: 'POST'})
      .then(res => res.json())
  },
  decrement () {
    return fetch('http://localhost:3000/counter', {method: 'DELETE'})
      .then(res => res.json())
  },
  getCounter () {
    return fetch('http://localhost:3000/counter', {method: 'GET'})
      .then(res => res.json())
  }
}
