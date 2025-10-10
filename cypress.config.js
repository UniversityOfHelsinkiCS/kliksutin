import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 60000,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    baseUrl: 'http://localhost:8000',
    experimentalRunAllSpecs: true,
  },
})
