import { type SchemaTypeDefinition } from 'sanity'
import heroCarousel from './heroCarousel'
import services from './services'
import blog from './blog'

const schemaTypes = [heroCarousel, services, blog]

export default {
  types: schemaTypes as SchemaTypeDefinition[]
}



