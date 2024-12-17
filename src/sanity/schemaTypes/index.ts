import { type SchemaTypeDefinition } from 'sanity'
import blog from './blog'
import heroCarousel from './heroCarousel'
import services from './services'

export const schemaTypes = [blog, heroCarousel, services]

export const schema = {
  types: [blog, heroCarousel, services] as SchemaTypeDefinition[]
}
