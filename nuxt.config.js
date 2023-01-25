export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: 'TeeTimesBooking-Yuan',
      htmlAttrs: {
        lang: 'en',
        ...i18nHead.htmlAttrs
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        ...i18nHead.meta
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;800&display=swap' },
        // { rel: 'stylesheet', href: '~/public/css/main.min.css' },
        ...i18nHead.meta
      ],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/public/css/main.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    { src: '~/plugins/CustomComponents' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
  ],

  i18n: {
    strategy: 'prefix_except_default',
    // To leverage the SEO benefits, you must configure the locales option as an array of objects, where each object has an iso option set to the language's ISO code
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
        dir: 'ltr',
      },
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es.js',
        dir: 'ltr',
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr.js',
      }
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'es',
      silentTranslationWarn: true,
      // messages: {
      //   en: {
      //     welcome: 'Welcome',
      //     greenfeesInSpain: 'GREENFEES IN SPAIN',
      //   },
      //   fr: {
      //     welcome: 'Bienvenue',
      //   },
      //   es: {
      //     welcome: 'Bienvenido',
      //     greenfeesInSpain: 'GREENFEES EN ESPAÑA',
      //   }
      // }
    },
    // You must also set the baseUrl option to your production domain in order to make alternate URLs fully-qualified:
    baseUrl: 'https://my-nuxt-app.com'
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
}
