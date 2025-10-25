// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  imports:{
    dirs: ['stores'],
  },

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-lodash',
    'dayjs-nuxt'
  ],

  lodash: {
    prefix: "_",
    prefixSkip: false,
    upperAfterPrefix: false,
  },
})
