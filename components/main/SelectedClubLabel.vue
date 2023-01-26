<template>
  <h4 class="absolute bottom-4 right-4 hidden md:block">
    <a href="#" class="flex flex-col justify-center px-3 py-1 text-sm text-center text-white bg-black opacity-60 hover:opacity-80" :title="`${club ? club.altFoto : 'Club'} (${club ? club.ciudad : 'City'})`">
      <span>{{ club ? club.nombre.toUpperCase() : 'Club' }}</span>
      <span class="text-xs">{{ club ? club.ciudad : 'City' }}</span>
    </a>
  </h4>
</template>

<script>
export default {
  name: 'SelectedClubLabel',
  
  props: {
    club: { type: Object, default: () => {}, }
  }
}
</script>