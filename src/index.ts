import Fastify from 'fastify'
import { EZSchema } from '@graphql-ez/plugin-schema'

import { gql } from '@graphql-ez/fastify'
import { ezApp } from './ez'

const server = Fastify({
  logger: true //Log de cada cosa que sucede en el servidor.
})

const { fastifyPlugin } = ezApp.buildApp({})

server.register(fastifyPlugin)

server.listen(4000)
