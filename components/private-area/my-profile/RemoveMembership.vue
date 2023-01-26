<template>
  <section>
    <h3 class="font-bold text-gray-700 bg-slate-100 py-2 px-1 text-center mb-3 md:mb-0 md:text-left md:py-3 md:px-6 md:shadow-sm">{{ $t('removeMembership') }}</h3>

    <form class="md:px-6 md:pt-5 md:pb-6 mb-10 md:mb-8 bg-white md:shadow-sm">
      <BaseAlert v-if="showBaseAlert" :alert="alert"/>
      
      <div class="grid grid-cols-1 gap-4 md:gap-8 mb-6">
        <base-input
          label="email"
          v-model="email" 
        />
      </div>  

      <div class="md:m-0">
        <BaseButton
          label="confirm"
          class="m-auto"
          :disabled="isLoading"
          :isLoading="isLoading"
          @click="removeMembership"
        />
      </div>

    </form> 
  </section>
</template>

<script>
import { hasEmailFormat } from '@/utils/regular-expression.js';
import AlertMixin from '@/config/mixins/alertMixin.js';

export default {
  mixins: [AlertMixin],

  data() {
    return {
      isLoading: false,
      email: ''
    }
  },

  methods: {
    async removeMembership() {
      if (!this.validateForms()) return;

      const body = { 
        email: this.email,
        avoidSpinner: true,
      };

      try {
        this.isLoading = true;
        await this.$api.usuarios.eliminarUsuario(body);
        this.setAlert(true, 'success', this.$t('membershipRemovedSuccessfully'));
      } catch (err) {
        this.setAlert(true, 'error', err.data.msg);
      } finally {
        this.isLoading = false;
      }
      console.log('remove membership');
    },

    validateForms() {
      this.alertMessages = [];

      if (!this.email) {
        this.setAlert(true, 'error', this.$t('emailVacio'));
        return false;
      }
      if (!hasEmailFormat(this.email)) {
        this.setAlert(true, 'error', this.$t('emailFormatoIncorrecto'));
        return false;
      }

      return true;
    }
  }
}
</script>