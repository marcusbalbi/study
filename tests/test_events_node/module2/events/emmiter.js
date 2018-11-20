const EventEmmiter = require('events')

class EffectivedExam extends EventEmmiter {
  constructor () {
    super()
    this.EFFECTIVED = 'EFFECTIVED'
    this.NOT_EFFECTIVED = 'NOT_EFFECTIVED'
  }
}


/**
 * @returns EventEmmiter
 */
module.exports = new EffectivedExam()
