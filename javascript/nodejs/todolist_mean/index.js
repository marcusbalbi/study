const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const TodosController = require('./controllers/TodosController')
const ApiController = require('./controllers/ApiController')

var app = express()

var port = process.env.PORT || 3000

app.use('/assets', express.static(__dirname + '/public/assets'))
app.use('/', express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

mongoose.connect(config.getDbConnectionString(), { useMongoClient: true })

TodosController(app)
ApiController(app)

app.listen(3000)
