import Fastify from 'fastify'
import { HOST, PORT } from './config'
import { ezApp } from './ez'

export const fastifyApp = () =>
  Fastify({ logger: false })
    .register(ezApp.buildApp().fastifyPlugin)
    .listen(PORT, HOST)
    .then((address) => console.info(`Server: ${address}`))

// import fastify from 'fastify'

// const server = fastify()

// server.get('/ping', async (request, reply) => {
//   return 'Hola Edgar\n'
// })

// server.get('/graphql', async (request, reply) => {
//   return 'Este es mi server graphQL\n'
// })

// server.listen(8080, (err, address) => {
//   if (err) {
//     console.error(err)
//     process.exit(1)
//   }
//   console.log(`Server listening at ${address}`)
// })
