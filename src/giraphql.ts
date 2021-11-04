import SchemaBuilder from '@giraphql/core'
import { PrismaClient, User } from '@prisma/client'

const builder = new SchemaBuilder({})

builder.queryType({
  fields(t) {
    return {
      hello: t.string({
        resolve() {
          return 'Hello World'
        }
      })
    }
  }
})
builder.mutationType({})

const prisma = new PrismaClient()

export const UserObject = builder.objectRef<User>('User')

UserObject.implement({
  fields: (t) => ({
    id: t.exposeID('id'),

    email: t.exposeString('email')
  })
})

builder.queryField('getUsers', (t) =>
  t.field({
    type: [UserObject],

    resolve: (_root, _args, ctx) => prisma.user.findMany()
  })
)

const CreateUserInput = builder.inputType('CreateUserInput', {
  fields: (t) => ({
    email: t.string({ required: true })
  })
})

builder.mutationField('createUser', (t) =>
  t.field({
    type: UserObject,

    args: { input: t.arg({ type: CreateUserInput, required: true }) },

    resolve: (_root, { input }, ctx) =>
      prisma.user.create({
        data: {
          email: input.email
        }
      })
  })
)

export const schema = builder.toSchema({})
