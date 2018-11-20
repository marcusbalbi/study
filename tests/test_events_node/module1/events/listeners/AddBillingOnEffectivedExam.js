const emmiter = require('../../../module2/events/emmiter')
const subcribeAction = require('../../actions/subscriber_action')

module.exports = () => {
  console.log('LISTENER AddBillingOnEffectivedExam')
  emmiter.on(emmiter.EFFECTIVED, (pData) => {
    console.log('listener ATIVATO!!')
    subcribeAction(pData)
  })
}