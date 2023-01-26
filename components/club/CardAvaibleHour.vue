<template>
  <article class="flex flex-col mx-auto w-full max-w-xs md:max-w-none shadow-sm">
    <div class=" flex flex-row items-center justify-between p-2 bg-slate-100">
      <p class="font-medium text-4xl">{{ hora.hora }}</p>
      <div class="flex flex-col">
        <p class="text-xxs text-right p-0">{{ $t('avaible') }}</p>
        <div class="flex flex-row justify-end">
          <svg class="w-8 p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path style="fill:#4B5563;" d="M3.3999,1.1c0,0.1,0,0.2,0,0.2c0,0.4,0.3,0.7,0.7,0.7c0.3,0,0.5-0.2,0.6-0.5l0,0L4.9,1l5.6,2.3L6.6,6C6.2,6.3,6.2,6.7,6.3,7.1,l0.9,2.1l-1.3,3.9C5.7,13.6,6.1,14,6.5,14c0.3,0,0.5-0.1,0.6-0.5l1.4-4l0.1,0.3v3.5c0,0,0,0.7,0.7,0.7s0.7-0.7,0.7-0.7V10,c0-0.2,0-0.3-0.1-0.5L8.5,6.1l2.7-1.9c0.2-0.2,0.4-0.3,0.4-0.6s-0.2-0.5-0.4-0.6L4,0.1c-0.0878,0-0.118,0.0179-0.2001,0.1,L3.3999,1.1z M5.5,3C4.7,3,4,3.7,4,4.5S4.7,6,5.5,6S7,5.3,7,4.5S6.2999,3,5.5,3z"/></svg>
          <div class="flex flex-col items-center justify-center w-8 h-8 bg-teal-100 p-1">
            <p class="text-lg font-bold">{{ hora.jugadoresDisponibles }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center py-4 px-2">
      <div v-for="(tarifa, index) in hora.tarifas" :key="index" :class="`flex w-full items-center justify-between ${index < hora.tarifas.length-1 ? 'pb-2 border-b border-gray-300' : ''}`"> 
        <p class="text-sm w-9/12 truncate pr-2">{{ tarifa.nombre }}</p> 
        <div class="flex flex-col items-center justify-end">
          <div class="flex flex-row">
            <p class="text-xs text-gray-400 text-right line-through mr-1" v-html="$options.filters.toCurrency(tarifa.precio, decimal)" />
            <p class="text-xs text-red-600 text-right">-{{ tarifa.descuento | toPercent }}</p> 
          </div>
          <p class="text-sm text-teal-600 text-right w-3/12" v-html="$options.filters.toCurrency(tarifa.precioNeto, decimal)" />
        </div>
      </div>
    </div>
    <div class="text-center pb-6">
      <span @click="getEvent" class="btn btn-primary m-auto cursor-pointer">{{ $t('bookNow') }}</span>
    </div>
  </article>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CardAvaibleHour',
  
  props: {
    // Información de la hora disponible a mostrar
    hora: { type: Object, default: () => {} },
    // Información del vendedor
    info: { type: Object, default: () => {} },
    // Fecha de la hora disponible a mostar
    fecha: { type: String, default: null },
  },

  computed: {
    ...mapState({
      culture: state => state.culture.culture,
      currency: state => state.culture.currency,
      decimal: state => state.culture.decimal,
    }),

    bookingPath() {
      return {
        path: `/${this.$i18n.locale}/booking-page`,
        query: {
          fecha: this.fecha,
          hora: this.hora.hora,
          nombreVP: this.info.nombreVP,
          recorrido: this.hora.idRecorrido,
          nombreRec: this.info.nombreRecorrido,
          idVP: this.$route.query.idVP,
          idVTO: this.$route.query.idVTO,
          desc: this.$route.query.desc,
        }
      };
    },
  },

  methods: {
    getEvent(e) {
      e.preventDefault();
      localStorage.setItem('selectedHour', JSON.stringify(this.hora));
      this.$store.commit('booking/setBookingHour', this.hora);
      this.$router.push(this.bookingPath);
    },
  },
};
</script>
