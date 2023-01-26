<template>
  <nuxt-link 
    :to="localePath(cardPath)"
    class="flex flex-col w-full max-w-sm mx-auto h-72 bg-white shadow-sm">
    <div 
      class="
      flex 
      flex-col 
      justify-end 
      h-full
      bg-center bg-cover bg-no-repeat"
      :style="`background-image:url(https://teetimesbooking.com/Images/prestigio/prestigio_15-1x.jpg)`"
    >
      <h3 v-if="region.nombre != ''" class="flex items-center justify-center h-24 bg-black bg-opacity-50 text-white text-center text-2xl md:text-3xl font-extrabold">
        {{ region.nombre }}
      </h3>
      <h3 v-else class="flex items-center justify-center h-24 bg-black bg-opacity-50 text-white text-center text-2xl md:text-3xl font-extrabold">
        {{ $t('otherA') }}
      </h3>
    </div>
  </nuxt-link>
</template>

<script>
import { createDate } from '@/utils/date';

export default {
  name: 'CardFeaturedRegion',
  
  props: {
    /** Información de la región seleccionada */
    region: { type: Object, default: () => {} }
  },

  computed: {
    /** URL de la región seleccionada
     * @returns {String} url
     */
    cardPath() {
      return { path: `/region/${this.region.nombre.replaceAll(' ', '-')}`, query: { id: this.region.id, fecha: createDate(), desc: this.region.nombre, municipio: 'false' }};
    }
  }
}
</script>