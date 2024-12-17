// sanity.config.ts
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { apiVersion, dataset, projectId } from '@/lib/env'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  apiVersion,
  plugins: [deskTool(), visionTool()],
 
})