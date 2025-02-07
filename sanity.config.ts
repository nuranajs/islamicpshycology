// sanity.config.ts
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, projectId } from './src/lib/env'
import { schemaTypes } from './src/sanity/schemaTypes'
export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  apiVersion,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes, 
  },
})
