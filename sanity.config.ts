// sanity.config.ts
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  projectId: '8elj67zb', // Ganti dengan Project ID Anda
  dataset: 'production',
  apiVersion: '2024-01-15',
  title: 'profile',
  basePath: '/admin',
  plugins: [deskTool()],
})

// Cek apakah environment variables terbaca
console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)