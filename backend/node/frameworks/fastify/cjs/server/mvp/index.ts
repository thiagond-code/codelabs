import type { FastifyInstance } from 'fastify'

const fastify: FastifyInstance = require('fastify')({ logger: true })

const PORT = Number(process.env.PORT ?? 3000)

fastify.all('*', (req, rep) => {
  return 'Hello, World!'
})

fastify.listen({ port: PORT }, (error) => {
  if (error) {
    fastify.log.error(error)
    process.exit(1)
  }
})