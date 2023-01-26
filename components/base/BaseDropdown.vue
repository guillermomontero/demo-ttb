<template>
  <!-- DROPDOWN -->
  <!-- TO DO: RESPONSIVE -->
  <div class="sm:w-96 m-5" id="dropdown">
    <div class="flex items-center relative w-full text-gray-400">
      <input ref="inputDropdown" v-model="textInput" class="w-full border border-gray-400 outline-0 focus:outline-none focus:ring-offset-transparent focus:ring-transparent focus:border-gray-700  cursor-pointer" type="text" name="" id="" :placeholder="$t('selectValue')" @click="toggleDropdown" readonly >
      <icon :icon="dropdownVisible ? 'fa-solid fa-arrow-up' : 'fa-solid fa-arrow-down'" class="w-5 h-5 absolute right-0 mr-3 pointer-events-none" />
    </div>
    <!-- OPTIONS -->
    <div ref="selectDropdown" class="relative w-full max-h-96 border overflow-auto scroll-smoth hidden">
      <div v-if="hasSearch" class="sticky top-0 left-0 z-10 flex flex-col items-center justify-center p-2 border-b border-solid bg-white">
        <div class="w-full relative border flex items-center text-gray-400">
          <input v-model="itemSearch" class="w-full pr-10 pl-3 border border-gray-400 outline-0 focus:outline-none focus:ring-offset-transparent focus:ring-transparent focus:border-gray-700 cursor-pointer" type="search" :placeholder="$t('search')" @input="searchValue" >
          <icon icon="fas fa-search" class="w-5 h-5 absolute right-0 mr-3 pointer-events-none" />
        </div>
      </div>
      <ul>
        <li
          v-for="(opt, index) in itemsFiltered"
          :key="index"
          class="p-3 border-b border-solid hover:bg-gray-200 cursor-pointer"
          :class="{ 'bg-teal-400': opt.value === value, 'hover:bg-teal-200': opt.value === value }"
          @click="selectValue(opt)"
        >
          {{ opt.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseDropdown',

  props: {
    /** Value desde el padre (v-model) */
    value: { type: Number, default: null },
    /** Texto a mostrar en el input */
    label: { type: String, default: 'Select...' },
    /** Arreglo de opciones para el select */
    items: { type: Array, default: [{ label: 'Label', value: 1 }], required: true },
    /** Opción para incluir búsqueda en el componente */
    hasSearch: { type: Boolean, default: true },
  },

  data() {
    return {
      dropdownVisible: false,
      itemsFiltered: [],
      itemSearch: '',
    };
  },

  computed: {
    /** Texto a mostrar al seleccionar una opción
     * @returns {String} 'text' 
     */
    textInput() {
      return this.value ? this.items.find(opt => opt.value === this.value).label : null;
    },
  },

  mounted() {
    /** Al crear el componente activamos el evento click
     * Esto permite que al mostrar el listado de opciones y hacer click en un elemento diferente al componente, éste se cierre
     */
    window.addEventListener('click', (e) => {
      if (!document.getElementById('dropdown').contains(e.target)) {
        if (this.dropdownVisible) this.toggleDropdown();
      }
    });

    this.itemsFiltered = this.items;
  },

  methods: {
    /** Activador Abrir / Cerrar opciones del componente */
    toggleDropdown() {
      if (this.dropdownVisible) this.closeDropdown();
      else this.openDropdown();
    },

    /** Abrir opciones del componente */
    openDropdown() {
      this.dropdownVisible = true;
      this.$refs.selectDropdown.classList.remove('hidden');
    },

    /** Cerrar opciones del componente */
    closeDropdown() {
      this.dropdownVisible = false;
      this.$refs.selectDropdown.classList.add('hidden');
    },

    /** Seleccionar elemento de las opciones
     * @param {Object} item Elemento del listado de opciones
     */
    selectValue(item = null) {
      this.$emit('update:selectedItem', item.value);
      this.itemSearch = '';
      this.itemsFiltered = this.items;
      this.closeDropdown();
    },

    /** Buscar valor en el listado de opciones */
    searchValue() {
      if (this.itemSearch) this.itemsFiltered = this.items.filter(value => value.label.toLowerCase().includes(this.itemSearch.toLowerCase()));
      else this.itemsFiltered = this.items;
    },

    /** Resetear valores de búsqueda para el listado del componente
     * @param {Object} event Evento nativo
     */
    clearValueSearch(event) {
      event.preventDefault();
      this.itemSearch = '';
      this.itemsFiltered = this.items;
    }
  }

}
</script>

