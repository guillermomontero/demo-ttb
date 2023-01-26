<template>
  <div class="relative z-10 flex flex-col md:mt-1 md:pr-4">
    <h1>
      <nuxt-link :to="localePath('/')" title="TeeTimesBooking" class="block md:mx-auto lg:max-w-md">
        <img src="~/static/img/logo-teetimesbooking-min.svg" alt="TeeTimesBooking" class="block md:hidden ml-2 w-12">
        <img src="~/static/img/logo-teetimesbooking-min.svg" alt="TeeTimesBooking" class="hidden md:block lg:hidden w-24">
        <img src="~/static/img/logo-teetimesbooking.svg" alt="TeeTimesBooking" class="hidden lg:block w-80">
      </nuxt-link>
    </h1>
    <h2 class="hidden lg:block mt-1 pr-6 text-white text-xs text-center font-light">
      {{ $t('greenfeesInSpain').toUpperCase() }}
    </h2>
    <h2 class="hidden md:block lg:hidden mt-1 text-white text-xxs text-left md:text-center font-light">
      TEETIMESBOOKING
    </h2>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'LogoSection',
  
  computed: {
    ...mapState({
      currentURL: state => state.currentURL,
    }),

    ...mapGetters([
      'isHomePage',
    ])
  },
}
</script>