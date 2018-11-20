const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TodoSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachments: Boolean
})

const Todos = mongoose.model('Todos', TodoSchema)

module.exports = Todos
