import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    highlight: {
      theme: 'dracula'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/colors.scss";'
        }
      }
    }
  }
})
