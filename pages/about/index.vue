<template>
  <section class="flex-auto md:bg-slate-200">
    <div class="container mx-auto py-5 px-4 md:py-10">
      <h2 class="text-xl font-extrabold text-center mb-5 md:mb-8">{{ $t('aboutUs') }}</h2>

      <BaseAlert v-if="showBaseAlert" :alert="alert"/>
    </div>
  </section>
</template>

<script>
import AlertMixin from '@/config/mixins/alertMixin.js';

export default {
  mixins: [AlertMixin],

  fetch() {
    this.setAlert(true, 'error', '¡¡¡NO está hecho!!!');
  }
}
</script>