import { builder } from '../builder'
import { User } from '@prisma/client'
import { InternalAppBuildContextKey } from '.pnpm/graphql-ez@0.13.3_e3c7d480b669599850aa03b9de4f5c92/node_modules/graphql-ez/app'

export const UserObject = builder.objectRef<User>('User')

UserObject.implement({
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email'),
    name: t.exposeString('name', { nullable: true })
  })
})

// TODO ...
builder.queryField('getUsers', (t) =>
  t.field({
    type: [UserObject],

    resolve: (_root, _args, { prisma }) => prisma.user.findMany()
  })
)

const CreateUserInput = builder.inputType('CreateUserInput', {
  fields: (t) => ({
    email: t.string({ required: true }),
    name: t.string({ required: true })
  })
})

builder.mutationField('createUser', (t) =>
  t.field({
    type: UserObject,

    args: { input: t.arg({ type: CreateUserInput, required: true }) },

    resolve: (_root, { input }, { prisma }) =>
      prisma.user.create({
        data: {
          email: input.email,
          name: input.name
        }
      })
  })
)
