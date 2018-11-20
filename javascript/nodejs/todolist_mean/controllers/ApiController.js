const TodosModel = require('../models/Todos')
const bodyPaser = require('body-parser');
module.exports = function (app) {

  app.use(bodyPaser.json())
  app.use(bodyPaser.urlencoded({ extended: true }))

  app.get('/api/todos/:username', (req, res) => {
    TodosModel.find({ username: req.params.username }, (err, result) => {
      res.status(200).json(result)
    })
  })

  app.get('/api/todo/:id', (req, res) => {
    TodosModel.findById({ _id: req.params.id }, (err, result) => {
      return res.status(200).json(result)
    })
  })

  app.post('/api/todo/', (req, res) => {
    if (req.body.id) {
      TodosModel.findByIdAndUpdate(req.body.id, {
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachments: req.body.hasAttachments
      }, (err, todo) => {
        if (err) {
          throw error
        }
        res.status(200).json(todo)
      })
    } else {
      const newTodo = TodosModel({
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachments: req.body.hasAttachments,
        username: 'marcusbalbi'
      })

      newTodo.save((err, todo) => {
        if (err) {
          throw error
        }
        res.status(200).json(todo)
      })
    }
  })

  app.delete('/api/todo', (req, res) => {
    TodosModel.findByIdAndRemove(req.body.id, (err) => {
      if (err) {
        throw err
      }

      res.status(204).end()
    })
  })

}
