// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
  public: {
    apiBase: process.env.API_BASE || 'https://api.example.com'
  }
},
app: {
  head: {
    title: 'Khoyoot App',
    meta: [
      { name: 'description', content: 'Khoyoot App' }
    ]
  }
},
css: ['~/assets/main.css'],
postcss: {
  plugins: {
    autoprefixer: {}
  }
},
  modules: [
    ['@pinia/nuxt', { storesDirs: ['./stores/**/*'], autoImports: ['defineStore'] }],
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],
    router: {
    options: {
      hashMode: false // فعله في حالة Desktop
    }
  },
    vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;'
        }
      }
    },
  },
})