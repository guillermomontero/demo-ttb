<template>
  <a href="#" @click="handleActionClick" :class="`flex flex-1 items-center justify-center p-2 text-white md:flex-auto md:px-5 lg:px-2.5 ${navBarAction.bgColor} ${navBarAction.bgColorHover} hover:bg-teal-800`">
    <span class="relative">
      <img :src="navBarAction.icon" :alt="navBarAction.text" class="w-6 h-6">
      <BaseActionIcon :freeText="navBarAction.textActionIcon" v-if="navBarAction.hasActionIcon"/>
    </span>
    <span class="ml-3 md:hidden lg:block flex items-center">{{ navBarAction.text }}</span>
  </a>
</template>

<script>
export default {
  props: {
    navBarAction: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      showBaseDialog: false,
    };
  },

  methods: {
    handleActionClick() {
      this.$emit('open-action-modal');
    },
  }
}
</script>