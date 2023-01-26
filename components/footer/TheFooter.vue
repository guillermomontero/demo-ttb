<template>
  <footer class="bg-gray-700">
    <div class="container mx-auto flex items-center flex-col md:flex-row box-content md:box-border px-4 min-h-44 pb-24 md:pb-0">
      <div class="flex items-start justify-center lg:justify-start w-full md:w-1/3 pt-5 pb-8 md:pt-0 md:pb-0 flex-nowrap text-left text-sm md:text-xs lg:text-sm"> 
        <FooterLinks :links="linksLeft" classExtra="pr-4 border-r border-gray-500"/>
        <FooterLinks :links="linksRight" classExtra="px-4"/>
      </div>
      <div class="flex items-center justify-center w-full md:w-1/3 flex-col xl:flex-row pb-8 md:pb-0">
        <BaseIconLink
          v-for="(link, index) in iconLinks"
          :key="index"
          :link="link"
        />
      </div>

      <div class="flex items-center justify-center lg:items-end w-full md:w-1/3 flex-col">
        <img src="~/static/img/logo-teetimesbooking-footer.svg" alt="TeeTimesBooking" class=" max-w-[200px]">
        <p class="mt-3 text-xs text-center text-gray-300">C/Córdoba, 6. office 304<br>Málaga (Spain)</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  
  data() {
    return {
      linksLeft: [
        { label: this.$t('aboutUs'), path: '/about', },
        { label: this.$t('contactInfo'), path: '/contact-info', },
        { label: this.$t('legalAdvice'), path: '/legal-advice', },
        { label: this.$t('privacyPolicy'), path: '/privacy-policy', },
        { label: this.$t('termsAndConditions'), path: '/terms-and-conditions', },
      ],
      linksRight: [
        { label: this.$t('profesionalClients'), path: 'https://cloud.imaster.golf/Compartido/Sesion/Sesion-Inicio?returnUrl=/', isNavToOtherWeb: true, },
        { label: this.$t('cookiesPolicy'), isCookie: true },
        { label: this.$t('cancelReservation'), path: '/cancel-reservation', },
        { label: this.$t('signUp'), path: '/sign-up', },
        { label: this.$t('login'), path: '/login', },
      ],
      iconLinks: [
        {
          text1: this.$t('downloadOnThe'),
          text2: 'App Store',
          iconUrl: require('~/static/img/ico-app-store.svg'),
          path: 'https://itunes.apple.com/app/tee-times-booking/id1449266700?mt=8',
          title: 'downloadOnTheAppStore',
        },
        {
          text1: this.$t('getItOn').toUpperCase(),
          text2: 'Google Play',
          iconUrl: require('~/static/img/ico-google-play.svg'),
          path: 'https://play.google.com/store/apps/details?id=com.teetimesbooking',
          title: 'downloadOnTheGooglePlay',
        }
      ]
    }
  }
}
</script>