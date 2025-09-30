// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // GLOBAL CSS
  css: ['~/assets/main.css'],
  app: {
    baseURL: process?.env.NUXT_APP_BASE_URL || '/'  // fallback to root
  },
  modules: ['nuxt-lottie'],
  lottie: {
    // Optional: Customize the folder path. Default is 'assets/lottie'.
    lottieFolder: '/assets/lottie',
  },
})
