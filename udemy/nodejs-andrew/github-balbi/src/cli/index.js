
const yargs = require('yargs')
const execute = require('./commands')
let args = yargs.options({
  fuser: {
    alias: 'find-user',
    string: true,
    description: 'Obtem um Usuário do GitHub',
  },
  suser: {
    alias: 'search-user',
    string: true,
    description: 'Busca por um usuário do GitHub'
  }
}).help().argv

execute(args)