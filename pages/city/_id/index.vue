<template>
  <div class="h-screen">
    city page id: {{ this.$route.params.id }}
  </div>
</template>

<script>
export default {
  // computed: {
  //   paramsId() {
  //     return this.$route.params.id;
  //   }
  // },

  mounted() {
    console.log(this.$route);
  }
}
</script>

