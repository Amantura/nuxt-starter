/* eslint-disable no-undef */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false
  },

  css: [
    '@/assets/css/app.css',
    '@/assets/css/tailwind.css'
  ],

  plugins: [
    {
      mode: 'client',
      src: '~/plugins/maska.js'
    }
  ],

  modules: [
    '@nuxtjs/harlem',
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    'unplugin-icons/nuxt'
  ]
})
