const fastify = require('fastify')({
  logger: true
})

fastify.decorate('teste', {
  ola: 'decorator'
})

fastify.get('/', (req, res) => {
  console.log(fastify.teste)
  res.send({ola: 'mundo'})
})

fastify.get('/ola', (req, res) => {
  res.send({ ola: 'mundo' })
})

console.log(fastify.printRoutes())
fastify.listen(3000, (addr) => {
  fastify.log.info('Escutando na porta', addr)
})