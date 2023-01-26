<template>
  <NuxtLink 
    :class="`${disabled ? disabledColorHover : colorHover} ${size} ${disabled ? 'link-disabled' : color} ${hasUnderlineWhenHover? 'hover:underline' : ''}`"
    :to="localePath(link.path)"
    custom
    v-slot="{navigate}"
  >
    <span v-if="!disabled" @click="navigate" role="link" class="cursor-pointer">
      {{ $t(link.label) }}
    </span>
    <span v-else>{{ $t(link.label) }}</span>
  </NuxtLink>
</template>

<script>
export default {
  name: 'BaseLink',
  
  props: {
    /** Objeto con información de la ruta a visitar */
    link: { type: Object, default: () => {} },
    /** Color del texto */
    color: { type: String, default: 'text-gray-300' },
    /** Color del texto al hacer hover */
    colorHover: { type: String, default: 'hover:text-white' },
    /** Tamaño del link */
    size: { type: String, default: '' },
    disabled: { type: Boolean, dfault: false },
    hasUnderlineWhenHover: { type: Boolean, dfault: false },
  },

   computed: {
    disabledColorHover() {
      return `hover:${this.color}`;
    }
  }
}
</script>
