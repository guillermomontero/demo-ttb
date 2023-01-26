<template>
  <t-dropdown
    :variant="{ 
      dropdownPositionRight: isViewportWidthSmallerThan767,
      dropdownPositionLeft: isViewportWidthGreaterThan767
    }"
  >
    <template
      slot="trigger"
      slot-scope="{
        mousedownHandler,
        focusHandler,
        blurHandler,
        keydownHandler,
      }"
    >
      <a
        class="flex items-center justify-center text-white md:flex-auto p-2 md:px-5"
        aria-label="User menu"
        aria-haspopup="true"
        @mousedown="mousedownHandler"
        @focus="focusHandler"
        @blur="blurHandler"
        @keydown="keydownHandler">
        <span class="relative">
          <img src="https://teetimesbooking.dasenred.com/maqueta/img/ico-globe.svg" alt="Idioma" class="w-6 h-6">
        </span>
        <span class="hidden lg:flex items-center ml-1">{{ selectedLanguage }}</span>
      </a>
    </template>

    <div slot-scope="{ hide, blurHandler }">
      <nuxt-link
        v-for="language in languages"
        :key="language.value"
        @blur="blurHandler"
        @click.native="selectLanguage(hide, language.value)" 
        :to="switchLocalePath(language.value)"
        role="menuitem"
        class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-teal-700 hover:text-white focus:outline-none focus:bg-teal-700 focus:text-white"
        :class="selectedLanguage === language.value.toUpperCase() ? 'bg-teal-100' : ''"
      >
        {{ $t(language.name) }}
      </nuxt-link>
    </div>
  </t-dropdown>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'LanguageSection',
   
  props: {
    /** Idioma seleccionado */
    selectedLanguage: { type: String, default: '' },
    /** Idiomas disponibles */
    languages: { type: Array, default: () => [] }
  },

  data() {
    return {
      showLanguagesDropdown: false,
    };
  },

  computed: {
    ...mapState({
      viewportWidth: state => state.viewportWidth,
    }),

    isViewportWidthSmallerThan767() {
      return this.viewportWidth <= 767
    },

    isViewportWidthGreaterThan767() {
      return this.viewportWidth > 767
    },
  },

  methods: {
    /** Seleccionar un idioma
     * @param {Function} hideFct
     * @param {String} locale
     */
    selectLanguage(hideFct, locale) {
      this.$emit('update-language-label', locale);
      hideFct();
    },

    /** Perder el foco */
    blurHandler() { }
  }
}
</script>