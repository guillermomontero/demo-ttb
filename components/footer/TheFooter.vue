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
  data() {
    return {
      linksLeft: [
        {
          label: 'About us',
          path: '/about',
        },
        {
          label: 'Contact info',
          path: '/contact-info',
        },
        {
          label: 'Legal advice',
          path: '/legal-advice',
        },
        {
          label: 'Privacy policy',
          path: '/privacy policy',
        },
        {
          label: 'Terms & conditions',
          path: '/terms-and-conditions',
        },
      ],
      linksRight: [
        {
          label: 'Profesional clients',
          path: '/prodesional-clients',
        },
        {
          label: 'Cookies policy',
          path: '/cookies-policy',
        },
        {
          label: 'Cancel reservation',
          path: '/cancel-reservation',
        },
        {
          label: 'Sign up',
          path: '/sign-up',
        },
        {
          label: 'Login',
          path: '/login',
        },
      ],
      iconLinks: [
        {
          text1: 'Download on the',
          text2: 'App store',
          icon: 'fab fa-apple',
        },
        {
          text1: 'GET ITE ON',
          text2: 'Google Play',
          icon: 'fab fa-google-play'
        }
      ]
    }
  }
}
</script>