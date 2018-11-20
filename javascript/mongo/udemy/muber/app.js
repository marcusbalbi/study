const express = require('express');
const routes = require('./routes')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.Promise = Promise;
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/muber', { useMongoClient: true });
}

app.use(bodyParser.json());

routes(app);

app.use((err, req, res, next) => {
  const errors = err.errors
  res.status(500).send({errors})
});

module.exports = app