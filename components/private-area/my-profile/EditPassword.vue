<template>
  <section>
    <h3 class="font-bold text-gray-700 bg-slate-100 py-2 px-1 text-center mb-3 md:mb-0 md:text-left md:py-3 md:px-6 md:shadow-sm">{{ $t('editPassword') }}</h3>

    <form class="md:px-6 md:pt-5 md:pb-6 mb-10 md:mb-8 bg-white md:shadow-sm">
      <BaseAlert v-if="showBaseAlert" :alert="alert"/>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mb-6"> 

        <base-input
          label="currentPassword"
          v-model="currentPassword" 
          type="password"
        />         
        <base-input
          label="newPassword"
          v-model="newPassword" 
          type="password"
        />         
        <base-input
          label="confirmPassword"
          v-model="confirmPassword" 
          type="password"
        />       
      </div> 

      <div class="md:m-0">           
        <BaseButton
          label="guardarCambios"
          class="m-auto"
          :disabled="isLoading"
          :isLoading="isLoading"
          @click="savePassword"
        />
      </div>

    </form> 
  </section>
</template>

<script>
import AlertMixin from '@/config/mixins/alertMixin.js';

export default {
  mixins: [AlertMixin],

  data() {
    return {
      isLoading: false,
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      alertMessages: [],
    }
  },

  methods: {
    async savePassword() {
      if (!this.validateForms()) return;

      const body = {
        oldPassword: this.currentPassword,
        newPassword: this.newPassword,
        avoidSpinner: true,
      };

      try {
        this.isLoading = true;
        await this.$api.usuarios.modificarPasswordUsuario(body);
        this.setAlert(true, 'success', this.$t('passwordChangedSuccessfully'));
      } catch (err) {
        this.setAlert(true, 'error', err.data.msg)
      } finally {
        this.isLoading = false;
      }
      
    },

    validateForms() {
      this.alertMessages = [];

      if (!this.currentPassword || !this.newPassword || !this.confirmPassword) {
        this.alertMessages = [ ...this.alertMessages, this.$t('validacionGeneral')];
        this.setAlert(true, 'error', this.alertMessages);
      }

      if (this.newPassword && this.confirmPassword && (this.newPassword !== this.confirmPassword)) {
        this.alertMessages = [ ...this.alertMessages, this.$t('passwordNotSame')];
        this.setAlert(true, 'error', this.alertMessages);
      }

      if (this.newPassword && this.newPassword.length < 6) {
        this.alertMessages = [ ...this.alertMessages, this.$t('validacionContrasena')];
        this.setAlert(true, 'error', this.alertMessages);
      }

      if (this.currentPassword && this.newPassword && this.confirmPassword && (this.newPassword === this.confirmPassword)) return true;
      else return false;
    }
  }
}
</script>