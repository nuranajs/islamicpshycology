import imageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = imageUrlBuilder({ projectId, dataset })

export const urlForImage = (source: Image) => {
  return imageBuilder.image(source)
}
