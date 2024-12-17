import { type SchemaTypeDefinition } from 'sanity'
import blog from './blog'
import heroCarousel from './heroCarousel'
import services from './services'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, heroCarousel, services],
}
