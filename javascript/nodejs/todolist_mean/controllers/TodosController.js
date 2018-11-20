const TodosModel = require('../models/Todos')
module.exports = function (app) {

  // app.get('index', (req, res) => {
  //   res.send(index)
  // })

  app.get('/api/seed-todos', (req, res) => {
    const starterTodos = [
      {
        username: 'marcusbalbi',
        todo: 'Fix the sink',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'marcusbalbi',
        todo: 'buy milk',
        isDone: true,
        hasAttachment: false
      }
    ]

    TodosModel.create(starterTodos, (err, result) => {
      res.status(200).json(result)
    })
  })
}
