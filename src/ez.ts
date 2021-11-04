import { CreateApp } from '@graphql-ez/fastify'
import { ezAltairIDE } from '@graphql-ez/plugin-altair'
import { ezSchema } from '@graphql-ez/plugin-schema'
import { schema } from './giraphql'

export const ezApp = CreateApp({
  schema,
  ez: {
    plugins: [
      // ezSchema({
      //   schema
      // }),
      ezAltairIDE()
    ]
  }
})

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
