<template>
  <div :class="`${h} animate-pulse w-full bg-gray-300`"/>
</template>

<script>
export default {
  name: 'SkeletonBlock',
  
  props: {
    h: { type: String, default: 'h-6', }
  }
}
</script>
