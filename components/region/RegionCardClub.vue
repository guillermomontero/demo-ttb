<template>
  <article class="flex flex-row shadow-sm">
    <div class="w-2/5 relative bg-cover bg-center bg-no-repeat" :style="`background-image:url(https://teetimesbooking.com/Images/prestigio/${club.imgPrestigio})`">
      <div class="absolute top-2 left-2 p-1 flex items-center bg-white text-sm text-teal-700 shadow-sm">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="fill-teal-700 w-4 h-4">
          <path d="m256 0c-99.252 0-180 80.748-180 180 0 33.534 9.289 66.26 26.869 94.652l142.88 230.26c2.737 4.411 7.559 7.091 12.745 7.091h0.119c5.231-0.041 10.063-2.804 12.75-7.292l139.24-232.49c16.61-27.792 25.389-59.681 25.389-92.22 0-99.252-80.748-180-180-180zm128.87 256.82-126.59 211.37-129.9-209.34c-14.633-23.632-22.567-50.896-22.567-78.846 0-82.71 67.49-150.2 150.2-150.2s150.1 67.49 150.1 150.2c0 27.121-7.411 53.688-21.234 76.818z"/>
          <path d="m256 90c-49.626 0-90 40.374-90 90 0 49.309 39.717 90 90 90 50.903 0 90-41.233 90-90 0-49.626-40.374-90-90-90zm0 150.2c-33.257 0-60.2-27.033-60.2-60.2 0-33.084 27.116-60.2 60.2-60.2s60.1 27.116 60.1 60.2c0 32.683-26.316 60.2-60.1 60.2z"/>
        </svg>
        <span class="font-bold ml-1">{{ club.distancia }}</span> 
        <span class="font-normal ml-1">{{ $t('km') }}</span>
      </div>
    </div>
    <div class="w-3/5 bg-slate-100 text-center px-2 pt-3 pb-5">
      <p class="text-base leading-5 font-bold text-gray-700">{{ club.nombreClub }}</p>
      <p class="text-sm text-gray-400 mb-3">{{ club.nombreRecorrido }}</p>  
      <div class="flex flex-row justify-center mb-5">
        <div>
          <p class="text-xs">{{ $t('teeTimes') }}</p>
          <p v-if="club.horaIni || club.horaFin" class="text-teal-700 text-lg font-bold">{{ club.horaIni | toLocaleHourStringFormat }} - {{ club.horaFin | toLocaleHourStringFormat }}</p>
          <p v-else class="text-teal-700 text-lg font-bold">--</p>
        </div>
        <div class="pl-3 ml-3 border-l border-l-slate-300">
          <p class="text-xs">{{ $t('pricesFrom') }}</p>
          <p class="text-teal-700 text-lg font-bold">
            <span v-html="$options.filters.toCurrency(club.precioDesde, decimal)" />
          </p>
        </div>
      </div>
      <nuxt-link :to="localePath(club.clubPath)" class="btn btn-primary m-auto">{{ $t('bookNow') }}</nuxt-link>
    </div>
  </article>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'RegionCardClub',
  
  props: {
    /** Información del club seleccionado */
    club: { type: Object, default: () => {} }
  },

  computed: {
    ...mapState({
      decimal: state => state.culture.decimal,
    }), 
  }, 
};
</script>
