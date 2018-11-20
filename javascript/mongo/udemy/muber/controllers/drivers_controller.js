const Driver = require('../models/driver')
module.exports = {
  greeting(req, res) {
    res.send({ hi: 'there' })
  },
  index (req, res, next) {
    const {lng, lat} = req.query
    Driver.geoNear(
      { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
      { spherical: true, maxDistance: 200000 }
    ).then((drivers) => res.send(drivers))
    .catch(next)
  },
  create (req, res, next) {
    const driverProps = req.body
    Driver.create(driverProps)
      .then((driver) => { res.send(driver) })
      .catch(next)
  },
  edit (req, res, next) {
    const driverProps = req.body
    const id = req.params.id

    Driver.update({ _id: id }, driverProps)
      .then(() => Driver.findById(id))
      .then((driver) => res.send(driver))
      .catch(next)
  },
  remove (req, res, next) {
    const id = req.params.id

    Driver.findByIdAndRemove(id)
      .then((driver) => res.send(driver))
      .catch(next)
  }
}