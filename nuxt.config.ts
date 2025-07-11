// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/CSS/main.css'],

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],


  app: {
    baseURL: '/jasonbraun/', // WICHTIG: mit führendem und abschließendem Slash!
      buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
      head: {
        meta: [
          { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
        ],
      script: [
        {
          src: 'https://kit.fontawesome.com/f5553d3254.js',
          crossorigin: 'anonymous'
        }
      ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/jasonbraun/favicon.ico' }
        ],
    },
  },

  ssr: false,       // falls du nur statisches SPA willst
  
})

