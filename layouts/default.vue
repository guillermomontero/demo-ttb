<template>
  <div class="w-full h-full flex flex-col font-Montserrat relative">
    <TheHeader/>
    <NavBar/>
    <Nuxt/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/header/TheHeader.vue';
import TheFooter from '@/components/footer/TheFooter.vue';
import NavBar from '@/components/header/NavBar.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    NavBar
  },

  head () {
    return this.$nuxtI18nHead()
  }
}
</script>


<style>
 /* body {
  color: red;
  font-size: 50px;
 } */
</style>