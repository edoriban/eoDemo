import { CreateApp } from '@graphql-ez/fastify'
import { ezAltairIDE } from '@graphql-ez/plugin-altair'
import { createContext } from './context'
import { schema } from './giraphql/schema'

export const ezApp = CreateApp({
  cors: { origin: '*' }, //control allow origin, permite verificar quien accede a la aplicacion.
  buildContext: createContext,
  schema,
  ez: {
    plugins: [ezAltairIDE()] //plugins, nos ayudan a procesar las solicitudes a la direccion de graphQL
  }
})

//get, put, post, HTTP,  si le queremos pasar archivos tiene otra estructura.
//Podemos agregar web sockets para usar otros protocolos
//upload HTTP para poder subir archivos y procesar esa solicitud en el proyecto.

// export const ezApp = CreateApp({
//   schema,
//   ez: {
//     plugins: [
//       // ezSchema({
//       //   schema
//       // }),
//       ezAltairIDE()
//     ]
//   }
// })

//const schema: EZSchema = {
//   typeDefs: gql`
//     type Query {
//       hello: String!
//     }
//   `,
//   resolvers: {
//     Query: {
//       hello(_root, _args, ctx) {
//         console.log(ctx.request)
//         return 'world'
//       }
//     }
//   }
// }
