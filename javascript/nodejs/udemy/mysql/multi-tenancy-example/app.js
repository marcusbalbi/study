const connectionResolver = require('./connectionResolver')

let con1 = connectionResolver.getConnection({
  client: 'marcus',
  host: '192.168.1.230',
  user: 'root',
  pass: 'abc13'
})

let con2 = connectionResolver.getConnection({
  client: 'geovane',
  host: '192.168.1.10',
  user: 'gege',
  pass: 'abc13'
})

let con3 = connectionResolver.getConnection({
  client: 'marcus',
  host: '192.168.1.10',
  user: 'gege',
  pass: 'abc13'
})

console.log(connectionResolver.connections)

console.log('con1 is equal to con2',con1 === con2)
console.log('con1 is equal to con3',con1 === con3)
