<template>
  <a class="bg-black flex w-36 box-content mb-4 xl:mb-0 xl:mr-4 py-2 px-4 rounded-md items-center hover:bg-gray-800 focus:outline-none" href="https://itunes.apple.com/app/tee-times-booking/id1449266700?mt=8" target="_blank" title="Download TeeTimesBooking App on the App Store">
    <icon class="w-6 h-6 text-white" :icon="link.icon"/>
    <span class="ml-3 flex items-start flex-col whitespace-nowrap text-left leading-none text-white">
      <span class="text-xxs mb-0.5">{{ link.text1}}</span>
      <span class="title-font font-medium">{{ link.text2}}</span>
    </span>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      default: () => {}
    }
  }
}
</script>