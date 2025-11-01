import Aura from '@primeuix/themes/aura';
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
    ],
    htmlAttrs: {
      dir: 'rtl',
      lang: 'ar',
    },
  }
},
  devServer: {
    port: 3002,
  },
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
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@primevue/nuxt-module'
  ],
    primevue: {
    usePrimeVue: true,
    autoImport: true,
    // register all components & directives (use '*' to include all)
    components: {
      include: '*'    // register every PrimeVue component (tree-shakable via build)
    },
    directives: {
      include: '*'    // register every PrimeVue directive (v-ripple, v-tooltip, etc.)
    },
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: false || 'none',
          // لتطبيق الدارك مود
          // darkModeSelector: '.my-app-dark',
          cssLayer: false
        },
      },
      ripple: true,
      inputVariant: 'outlined',
    }
  },
  i18n: {
    langDir: "locales",
    strategy: "prefix_except_default",
    defaultLocale: "ar",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en/index.js",
      },
      {
        code: "ar",
        iso: "ar",
        name: "Arabic",
        file: "ar/index.js",
      } ],
  },
    router: {
    options: {
      hashMode: false // فعله في حالة Desktop
    }
  },
  css: [
    '~/assets/styles/main.scss',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',
  ],
    vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_variables.scss" as *;'
        }
      }
    },
  },
})