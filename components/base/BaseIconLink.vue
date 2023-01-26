<template>
  <a 
    class="bg-black flex w-36 box-content mb-4 xl:mb-0 xl:mr-4 py-2 px-4 rounded-md items-center hover:bg-gray-800 focus:outline-none" 
    :href="link.path" 
    target="_blank" 
    :title="$t(link.title)"
  >
    <img class="w-6 h-6" :src="link.iconUrl"  :alt="$t(link.text2)">
    <span class="ml-3 flex items-start flex-col whitespace-nowrap text-left leading-none text-white">
      <span class="text-xxs mb-0.5">{{ $t(link.text1) }}</span>
      <span class="title-font font-medium">{{ $t(link.text2) }}</span>
    </span>
  </a>
</template>

<script>
export default {
  name: 'BaseIconLink',
  
  props: {
    /** Objeto con información de la ruta a visitar */
    link: { type: Object, default: () => {} }
  }
}
</script>