<template>
  <section class="flex-auto md:bg-slate-200">
    
    <div class="container mx-auto py-5 px-4 md:py-10">
      <h2 class="text-xl font-extrabold text-center mb-5 md:mb-8">{{ $t('legalAdvice')}}</h2>

      <BaseAlert v-if="showBaseAlert" :alert="alert"/>
      
      <article v-html="legalAdvice"/>
    </div>

  </section>
</template>

<script>
import AlertMixin from '@/config/mixins/alertMixin.js';

export default {
  mixins: [AlertMixin],

  data() {
    return {
      legalAdvice: null,
    }
  },

  async fetch() {
    await this.getText();
  },

  methods: {
    async getText() {
      const body = {
        idTipoTexto: 2,
      };
      try {
        this.setAlert(false);
        const response = await this.$api.textos.getText(body);
        this.legalAdvice = response.datos.texto;
      } catch (err) {
        this.setAlert(true, 'error', err.data.msg);
      }
    }
  }
}
</script>
