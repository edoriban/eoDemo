import SchemaBuilder from '@giraphql/core'
import { Context } from '../context'

export const builder = new SchemaBuilder<{
  Context: Context
}>({})

builder.queryType({})
builder.mutationType({})
