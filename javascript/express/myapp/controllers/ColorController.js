const color = require('../models/Color')

const colorController = {
  index: (req, res, next) => {
    color.all().then((result) => {
      res.status(200).send({
        data: result
      })
    })
  },
  show: (req, res, next) => {
    color.find(req.params.id).then((result) => {
      res.status(200).send({
        data: result
      })
    }).catch((err) => {
      if (err.name === 'ModelNotFoundError') {
        res.status(404).send({
          errors: err.message
        })
      }
    })
  }
}

module.exports = colorController
