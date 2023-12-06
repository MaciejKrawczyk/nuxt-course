// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  hooks: {
    ready: (ctx) => console.log(ctx)
  },
  devtools: {
    enabled: true
  },
  alias: {
    '@': resolve(__dirname, "/")
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/main.css'],
})
