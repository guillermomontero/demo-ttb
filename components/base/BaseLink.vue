<template>
  <NuxtLink 
    :class="`${color} ${colorHover} ${size}`"
    :to="link.path"
  >
    {{ link.label }}
  </NuxtLink>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      default: () => {}
    },
    color: {
      type: String,
      default: 'text-gray-300'
    },
    colorHover: {
      type: String,
      default: 'hover:text-white'
    },
    size: {
      type: String,
      default: 'text-base'
    }
  }
}
</script>
