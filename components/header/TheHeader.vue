<template>
  <header class="flex justify-start items-center md:justify-center h-12 min-h-12 md:h-16 md:min-h-16 bg-teal-700">
    <div class="absolute w-full md:w-auto top-1 right-2 md:top-3 md:right-auto md:left-0 
                flex items-center justify-between flex-row-reverse md:flex-row md:justify-start">
      <LanguagesSection 
        :selectedLanguage="selectedLanguage"
        :languages='languages'
        @update-language-label="updateLanguageLabel"
      />
      <BaseSearchBar v-if="showBaseSearchBar"/>
      <span class="w-14 invisible md:hidden">&nbsp;</span>
    </div>
    
    <LogoSection/>

  </header>
</template>

<script>
import { mapState, mapGetters} from 'vuex';
import LanguagesSection from '@/components/header/LanguagesSection.vue';
import LogoSection from '@/components/header/LogoSection.vue';

export default {
  name: 'TheHeader',

  components: {
    LanguagesSection,
    LogoSection,
  },

  data() {
    return {
      languages: [
        { label: 'ES', value: 'es', name: 'spanish' },
        { label: 'EN', value: 'en', name: 'english' },
        { label: 'SV', value: 'sv', name: 'swedish' },
        { label: 'FR', value: 'fr', name: 'french' },
      ],
      selectedLanguage: 'EN',
    };
  },

  computed: {
    ...mapState({
      locale: state => state.culture.locale,
      viewportWidth: state => state.viewportWidth,
    }),

    ...mapGetters([
      'isHomePage'
    ]),

    showBaseSearchBar() {
      if (!this.isHomePage || (this.isHomePage && this.viewportWidth < 768)) return true;
      return false;
    }
  },

  mounted() {
    if (!document.cookie.includes('locale')) this.initializeLanguageAccordingBrowserLocale();
    else {
      this.updateLanguageLabel(this.$i18n.locale);
    }
  },

  methods: {
    /** Inicializar el idioma para la web según el idioma del cliente */
    initializeLanguageAccordingBrowserLocale() {
      const browserLocale = this.$i18n.getBrowserLocale();
      this.$router.push(this.switchLocalePath(browserLocale));
      this.updateLanguageLabel(browserLocale);
    },

    /**
     * Actualizamos el idioma seleccionado ante la interacción del usuario
     * @param {String} locale Local seleccionado por el usuario, por defecto 'en'
     */
    updateLanguageLabel(locale = 'en') {
      this.selectedLanguage = this.languages.find(item => item.value === locale).label;
      this.setCookies(locale);
    },

    /**
     * Una vez seleccionado un idioma procedemos a setear las respectivas cookies relacionadas con la cultura (locale, culture y currency)
     * @param {String} locale Local seleccionado por el usuario, por defecto 'en'
     */
    setCookies(locale = 'en') {
      // Reseteamos las cookies que puedan existir para locale, culture, currency y decimal
      if (document.cookie.includes('locale')) document.cookie =`locale=''; path=/; expires=${new Date(0).toUTCString()};`;
      if (document.cookie.includes('culture')) document.cookie =`culture=''; path=/; expires=${new Date(0).toUTCString()};`;
      if (document.cookie.includes('currency')) document.cookie =`currency=''; path=/; expires=${new Date(0).toUTCString()};`;
      if (document.cookie.includes('decimal')) document.cookie =`decimal=''; path=/; expires=${new Date(0).toUTCString()};`;

      // Seteamos la cookie y el store de locale con el valor seleccionado en el modal de lenguajes
      document.cookie = `locale=${locale};path=/`;
      this.$store.commit('culture/setLocale', locale);

      // Seteamos las cookies y el store de culture y currency según el locale seleccionado
      switch (locale) {
        case 'es':
          document.cookie = 'culture=es-ES;path=/';
          document.cookie = 'currency=EUR;path=/';
          document.cookie = 'decimal=,;path=/';
          this.$store.commit('culture/setCulture', 'es-ES');
          this.$store.commit('culture/setLocale', 'es');
          this.$store.commit('culture/setCurrency', 'EUR');
          break;

        case 'en':
          document.cookie = 'culture=en-GB;path=/';
          document.cookie = 'currency=GBP;path=/';
          document.cookie = 'decimal=.;path=/'
          this.$store.commit('culture/setCulture', 'en-GB');
          this.$store.commit('culture/setLocale', 'en');
          this.$store.commit('culture/setCurrency', 'GBP');
          break;

        case 'sv':
          document.cookie = 'culture=sv-SE;path=/';
          document.cookie = 'currency=SEK;path=/';
          document.cookie = 'decimal=,;path=/'
          this.$store.commit('culture/setCulture', 'sv-SE');
          this.$store.commit('culture/setLocale', 'sv');
          this.$store.commit('culture/setCurrency', 'SEK');
          break;

        case 'fr':
          document.cookie = 'culture=fr-FR;path=/';
          document.cookie = 'currency=EUR;path=/';
          document.cookie = 'decimal=,;path=/'
          this.$store.commit('culture/setCulture', 'fr-FR');
          this.$store.commit('culture/setLocale', 'fr');
          this.$store.commit('culture/setCurrency', 'EUR');
          break;
      
        default:
          document.cookie = 'culture=en-GB;path=/';
          document.cookie = 'currency=GBP;path=/';
          document.cookie = 'decimal=.;path=/'
          this.$store.commit('culture/setCulture', 'en-GB');
          this.$store.commit('culture/setLocale', 'en');
          this.$store.commit('culture/setCurrency', 'GBP');
          break;
      }
    },
  }
}
</script>