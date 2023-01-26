<template>
  <div class="w-full h-full">
    
    <BaseSpinner :isHidden="!showSpinner"/>

    <div class="w-full h-full flex flex-col font-Montserrat">
      <TheHeader/>
      <NavBar/>
      <main class="flex flex-col flex-auto overflow-y-auto overflow-x-hidden text-gray-700">
        <Nuxt />
        <TheFooter/>
      </main>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import TheHeader from '@/components/header/TheHeader.vue';
import TheFooter from '@/components/footer/TheFooter.vue';
import NavBar from '@/components/header/NavBar.vue';
import { getCookie } from '@/utils/getCookie';

export default {
  components: {
    TheHeader,
    TheFooter,
    NavBar
  },

  head () {
    return this.$nuxtI18nHead();
  },

  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.$store.commit('setCurrentURL', to.path);
      }
    },
  },

  computed: {
    ...mapState({
      currentURL: state => state.currentURL,
      cartLocator: state => state.cart.cartLocator,
      showSpinner: state => state.spinner.showSpinner,
    }),

    ...mapGetters([
      'isHomePage'
    ]),
  },

  beforeMount() {
    this.onResize();
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      this.addCookiebotDataset();
    });
  },

  mounted() {
    this.getCulture();
    if (this.cartLocator) this.getCarrito();
  },

  methods: {
    /** Al modificar el tamaño */
    onResize() {
      this.$store.commit('setViewportWidth', window.innerWidth);
    },

    /** Obtener la cultura */
    getCulture() {
      const cookie = document.cookie;

      const locale = getCookie(cookie, 'locale', null);
      if (locale) {
        this.$store.commit('culture/setLocale', locale);
      } else {
        const loc = 'en';
        document.cookie = `locale=${loc};path=/`;
        this.$store.commit('culture/setLocale', loc);
      }

      const culture = getCookie(cookie, 'culture', null);
      if (culture) {
        this.$store.commit('culture/setCulture', culture);
      } else {
        const cult = navigator.language;
        document.cookie = `culture=${cult};path=/`;
        this.$store.commit('culture/setCulture', cult);
      }

      const currency = getCookie(cookie, 'currency', null);
      if (currency) {
        this.$store.commit('culture/setCurrency', currency);
      } else {
        const curr = 'GBP';
        document.cookie = `currency=${curr};path=/`;
        this.$store.commit('culture/setCurrency', curr);
      }

      const decimal = getCookie(cookie, 'decimal', null);
      if (decimal) {
        this.$store.commit('culture/setDecimal', decimal);
      } else {
        const dec = '.';
        document.cookie = `decimal=${dec};path=/`;
        this.$store.commit('culture/setDecimal', dec);
      }
    },

    async getCarrito() {
      const payload = { localizador: this.cartLocator };

      try {
        const response = await this.$api.carritosreserva.getCarrito(payload);
        const cartParse = JSON.parse(response.datos.jsonCarrito);
        
        if (cartParse.listaClubesRecorridos) this.$store.dispatch('cart/setCart', cartParse);
      } catch (error) {
        console.log('getCarrito', error);
      }
    },

    addCookiebotDataset() {
      setTimeout(() => {
        for (const scriptTag of document.head.getElementsByTagName('script')) {
          const srcValue = scriptTag.getAttribute('src');
          if (srcValue.includes('/_nuxt/pages/')) scriptTag.dataset.cookieconsent = 'ignore';
        }
      }, 1000)
    }
  },

  destroyed() {
    window.removeEventListener('resize', this.onResize); 
  }
}
</script>
