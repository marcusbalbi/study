const action = require('./module2/actions/action')

const listeners = require('./module1/events/listeners')

listeners.forEach(listener => listener())

action({ ola: 'listener'})

require('./module1/actions/subscriber_action')('teste')