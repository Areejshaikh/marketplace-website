import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import contactForm from './contact.form'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,contactForm],
}
