// schemas/heroCarousel.js
export default {
  name: 'heroCarousel',
  title: 'Hero Carousel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description', 
      title: 'Description',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string'
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string' 
    }
  ]
}