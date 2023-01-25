<template>
  <form class="flex" @submit.prevent="handleSubmit">
    <input type="text" id="search" v-model="inputValue" placeholder="Club, country, city..." class="py-2 px-3 shadow-sm md:w-60 lg:w-96 lg:py-3 lg:text-lg">
    <BaseButton type="submit" color="text-white" icon="fa-search" :label="$t('search')" labelHidden="hidden" @click="handleSearchBtn"/>
  </form>
</template>

<script>
export default {
  props: {
    zonas: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      inputValue: null,
    };
  },

  methods: {
    handleSearchBtn() {
      const a = this.zonas.find(zona => zona.nombre.toLowerCase().includes(this.inputValue));
      this.$emit('get-filtered-zonas', a);
    },

    handleSubmit() {
    }
  }
}
</script>