/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
// sanity.cli.ts

import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '8elj67zb', // Replace with your actual project ID
    dataset: 'production', // Or use a different dataset
  },
})

