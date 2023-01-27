require('dotenv').config();

export default {
  target: 'server',
  
  publicRuntimeConfig: {
    axios: {
      clientTTBAPIURL: process.env.TTB_API_URL,
      clienteId: process.env.CLIENTE_ID,
    }
  },

  privateRuntimeConfig: {
    axios: {
      serverTTBAPIURL: process.env.TTB_API_URL,
      serverUser: process.env.SERVER_USER,
      serverPass: process.env.SERVER_PASS,
      serverVendorId: process.env.SERVER_VENDOR_ID,
      serverTokenExpires: process.env.SERVER_TOKEN_EXPIRES,
      clienteId: process.env.CLIENTE_ID,
    }
  },

  axios: {
    baseURL: process.env.TTB_API_URL, // Used as fallback if no runtime config is provided
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tee Times Booking. Choose Golf Course in TeeTimesBooking',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' },
      { hid: 'title', name: 'title', content: 'Tee Times Booking. Choose Golf Course in TeeTimesBooking' },
      { hid: 'description', name: 'description', content: 'Search for your destination, find your favourite golf course and book your tee times. Tee Times? Book Now!' },
      { hid: 'google', name: 'google', content: 'notranslate' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;800&display=swap' },
    ],
    script: [
      { 
        id: "Cookiebot", 
        src: "https://consent.cookiebot.com/uc.js", 
        "data-cbid": "4f7e07ef-9f21-497a-8372-676683434dcf", 
        "data-blockingmode": "auto", 
        type: "text/javascript" 
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/CustomComponents' },
    { src: '~/plugins/vue-tailwind' },
    { src: '~/plugins/ttbAPI' },
    { src: '~/plugins/filters' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
  ],

  i18n: {
    strategy: 'prefix_and_default',
    rootRedirect: {
      path: '/en'
    },
    defaultDirection: 'ltr',
    defaultLocale: 'en',
    // To leverage the SEO benefits, you must configure the locales option as an array of objects, where each object has an iso option set to the language's ISO code
    locales: [
      { code: 'en', iso: 'en-US', file: 'en/en.js', dir: 'ltr', },
      { code: 'es', iso: 'es-ES', file: 'es/es.js', dir: 'ltr', },
      { code: 'fr', iso: 'fr-FR', file: 'fr/fr.js', dir: 'ltr', },
      { code: 'sv', iso: 'sv-SE', file: 'sv/sv.js', dir: 'ltr', }
    ],
    lazy: true,
    langDir: 'locales/',
    detectBrowserLanguage: {
      alwaysRedirect: false,
      fallbackLocale: 'en',
      redirectOn: 'root',
      useCookie: true,
      cookieAge: 365,
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieKey: 'i18n_redirected',
      cookieSecure: false,
    },
    vueI18n: {
      fallbackLocale: 'en',
      silentTranslationWarn: true,
    },
    // You must also set the baseUrl option to your production domain in order to make alternate URLs fully-qualified:
    baseUrl: process.env.APP_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  server: {
    port:  process.env.PORT, // default: 8080
    host: process.env.HOST // default: 0.0.0.0
  },

  loading: false,
}
