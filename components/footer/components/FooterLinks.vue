<template>
  <nav :class="`list-none ${classExtra}`">
    <li
      class="mb-2"
      v-for="link in links"
      :key="link.label"
    >
      <BaseLink
        :link="link"
        color="text-gray-300"
        colorHover="hover:text-white"
      />
    </li>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => {}
    },
    classExtra: {
      type: String,
      default: ''
    }
  }
}
</script>