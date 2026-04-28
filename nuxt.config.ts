// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ui: {
    colorMode: false
  },
  modules: [
    '@nuxt/fonts','@nuxt/ui','@nuxtjs/supabase','@pinia/nuxt'
  ],
  supabase: {
    redirect: false
  },
  css: ["~/assets/css/main.css"],
})