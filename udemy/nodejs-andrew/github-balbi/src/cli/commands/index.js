const user = require('./users')

const getCommands = (commandsExec, pCommand) => {
  let commandType = Object.keys(pCommand)
  let handlers = {}
  commandsExec.forEach((command) => {
    commandType.forEach((cType) => {
      if (pCommand[cType].name === command) {
        handlers[command] = pCommand[cType].handler
      }
    })
  })
  return handlers
}

module.exports = (pArgs) => {
  let commandsExec = Object.keys(pArgs)
  let userCommands = getCommands(commandsExec, user)
  
  for(command in userCommands) {
    userCommands[command](pArgs[command])
  }

}
