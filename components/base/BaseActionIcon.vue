<template>
  <span class="absolute top-[-8px] right-[-8px] flex items-center justify-center h-4 w-4 rounded-full text-xs font-bold text-white bg-teal-700">
    <icon v-if="icon" :icon="icon"/>
    <span v-if="freeText">{{ freeText }}</span>
  </span>
</template>

<script>
export default {
  name: 'BaseActionIcon',
  
  props: {
    /** Icono a mostrar en el botón */
    icon: { type: String, default: '' },
    /** Texto a mostrar en el botón */
    freeText: { type: String, default: '' }
  }
}
</script>