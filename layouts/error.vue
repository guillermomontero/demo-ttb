<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">{{ $t('pageNotFound') }}</h1>
    <h1 v-else>{{ $t('anErrorOccurred') }}</h1>
    <nuxt-link :to="localePath('/')">{{ $t('homePage') }}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Error',
  
  props: ['error'],

  layout: 'errorLayout' // you can set a custom layout for the error page
}
</script>