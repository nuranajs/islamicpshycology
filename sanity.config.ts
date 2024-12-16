// sanity.config.ts
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-02-25',
  title: 'profile',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
})

// Cek apakah environment variables terbaca
console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)