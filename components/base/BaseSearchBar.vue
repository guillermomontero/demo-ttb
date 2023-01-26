<template>
  <t-rich-select
    :fetch-options="getSugerencias"
    :placeholder="searchbarPlaceholder"
    value-attribute="label"
    text-attribute="label"
    selectOnClose
    :variant="{ danger: isError, baseSearchBar: true}"
    class="flex"
    :class="[isHomePage && viewportWidth > 767 ? 'py-2 px-3 md:w-60 lg:w-96 lg:py-3' : 'justify-start items-center w-[240px] h-[36px]']"
  >
    <!-- Icon -->
    <template slot="arrow">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-[22px] h-[22px] fill-white stroke-[15px]" viewBox="0 0 512.005 512.005">
        <path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
          S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
          c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
          M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"/>
      </svg>
    </template>

    <!-- noResults  slot -->
    <template slot="noResults" slot-scope="{ className }">
      <div :class="className">{{  msgSlotNoResults }}</div>
    </template>

    <!-- Option -->
    <template slot="option" slot-scope="{ isSelected, className, option, query }">
      <div
        class="shadow-sm lg:text-lg" 
        :class="className"
        @click="selectSugerencia(option, query)"
      >
        <div class="flex flex-col w-full ml-2 text-gray-800">
          <strong>
            {{ option.raw.label }}
            <span v-if="isSelected">({{ $t('selected') }})</span>
          </strong>
          <span class="text-sm leading-tight text-gray-500">{{ getResultType(option.raw.data.cat) }}</span>
        </div>
      </div>
    </template>
  </t-rich-select>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { createDate } from '@/utils/date';

const PLACEHOLDER_DEFAULT_VALUE = 'Search...';

export default {
  name: 'BaseSearchBar',
  
  data() {
    return {
      sugerencias: [],
      inputValue: null,
      isError: false,
      errorMessage: null,
      searchbarPlaceholder: PLACEHOLDER_DEFAULT_VALUE
    };
  },

  computed: {
    ...mapState({
      viewportWidth: state => state.viewportWidth,
    }),

    ...mapGetters([
      'isHomePage',
    ]),

    msgSlotNoResults() {
      if (this.inputValue) return this.errorMessage || this.$t('noResults');
      return '';
    }
  },

  watch: {
    $route() {
      this.assignInitialValueFromLastSearch();
    },
  },

  mounted() {
    document.addEventListener('keydown', this.handleDocumentKeydownEnter);
    this.assignInitialValueFromLastSearch();
  },

  methods: {
    handleDocumentKeydownEnter({ keyCode }) {
      // Enter keycode is equal to 13
      if (keyCode === 13 && this.inputValue && !this.isError && this.sugerencias.length) {
        const copySugerencias = structuredClone(this.sugerencias);
        const firstSugerencia = {
          raw: copySugerencias[0]
        };
        this.selectSugerencia(firstSugerencia);
      }
    },

    selectSugerencia(item) {
      this.$store.commit('search-bar/setSearchBarSelectedItem', item);
      if (item.raw.data.cat === 'MUN') this.navToRegion(item);
      else this.navToClub(item);
    },

    /** Navegar hacia la región seleccionada
     * @param {Object} item Información del item seleccionado
     */
    navToRegion(item) {
      const regionPath = {
        path: `/${this.$i18n.locale}/region/${item.raw.label.replaceAll(' ', '-')}`,
        query: {
          id: `${item.raw.data.id}`,
          desc: item.text,
          municipio: true,
          fecha: createDate(new Date()) },
      }
      this.$router.push(regionPath);
    },

    /** Navegar hacia el club seleccionado
     * @param {Object} item Información del item seleccionado
     */
    navToClub(item) {
      console.log(item);
      const clubPath = {
        path: `/${this.$i18n.locale}/club/${item.raw.label.split(' - ')[0].replaceAll(' ', '-')}`,
        query: {
          tee: item.raw.label.split(' - ')[1].replaceAll(' ', '-'),
          desc: item.text,
          fecha: createDate(new Date()),
          idVP: item.raw.data.id2,
          idVTO: item.raw.data.id3,
          rec: item.raw.data.id,
          hora: 'a',
          horaInicio: '6:00',
          horaFin: '22:00',
          precioDesde: 1,
          precioHasta: 2000,
          numJug: -1,
          prMin: 1,
          prMax: 550,
          seId: -1,
          seS: '',
          seD: 5,
          seT: '',
          seF: '',
        }
      }
      this.$router.push(clubPath);
    },

    getResultType(cat) {
      if (cat === 'MUN') return this.$t('location');
      return this.$t('club');
    },

    async getSugerencias(inputValue) {
      this.inputValue = inputValue;
      
      if (!inputValue) {
        this.sugerencias = [];
        return { results: {} };
      }

      const body = { 
        keyword: inputValue,
        avoidSpinner: true,
      };

      try {
        const response = await this.$api.busqueda.getListarSugerencias(body);
        this.resetDatosError();
        
        this.sugerencias = response.listaElementos;
        this.searchbarPlaceholder = PLACEHOLDER_DEFAULT_VALUE;
        return { results: response.listaElementos};
      } catch (err) {
        this.isError = true;
        this.errorMessage = err.data.msg;
      }
    },

    resetDatosError() {
      this.isError = false;
      this.errorMessage = null;
    },

    assignInitialValueFromLastSearch() {
      this.searchbarPlaceholder = this.$route.query.desc ?? PLACEHOLDER_DEFAULT_VALUE;
    }
  },

  destroyed() {
    document.removeEventListener('keydown', this.handleDocumentKeydownEnter);
  },
}
</script>