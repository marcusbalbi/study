const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log('GET /')
  res.status(200).json({ name: 'jhon', age: 15 })
})

app.get('/person/:name', (req, res) => {
  console.log('GET /person/' + req.params.name)
  res.status(200).json({ name: req.params.name, age: Math.floor(Math.random() * 99) })
})

app.listen(3000)
