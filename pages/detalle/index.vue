<template>
  <section class="flex-auto md:bg-slate-200">
    <div class="container mx-auto py-5 px-4 md:py-10">
      <BaseAlert v-if="showBaseAlert" :alert="alert"/>
      <span v-html="detalle"/>
    </div>
  </section>
</template>

<script>
import AlertMixin from '@/config/mixins/alertMixin.js';

export default {
  mixins: [AlertMixin],

  layout: 'detalle',

  data() {
    return {
      detalle: ''
    };
  },

  async mounted() {
    await this.getDetalles();
  },

  methods: {
    async getDetalles() {
      const body = {
        localizador: this.$route.query.localizador,
      };
      try {
        const response = await this.$api.reserva.obtenerVoucher(body);
        this.detalle = response.html;
        this.setAlert(false);
      } catch (err) {
        this.setAlert(true, 'error', err.data.msg);
      }
    }
  }
}
</script>