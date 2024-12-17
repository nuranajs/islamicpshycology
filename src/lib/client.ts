import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId : '8elj67zb',
  dataset : 'production',
  apiVersion : '2024-02-25',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation

})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}