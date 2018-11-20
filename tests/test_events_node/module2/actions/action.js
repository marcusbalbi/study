const Emmiter = require('../events/emmiter')

module.exports = (pData) => {
  console.log('ACIONANDO ACTION 1')
  Emmiter.emit(Emmiter.EFFECTIVED, pData)
}
