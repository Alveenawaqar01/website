import { type SchemaTypeDefinition } from 'sanity'
import category from './category'
import product from './product'
import blog from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category,product,blog],
}
