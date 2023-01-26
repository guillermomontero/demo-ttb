<template>
  <form @submit.prevent="handleRegistrarse" class="max-w-sm mx-auto md:px-6 md:pt-5 md:pb-6 md:mb-8 bg-white md:shadow-sm">
    <BaseAlert v-if="showBaseAlert" :alert="alert"/>

    <div class="flex flex-col mb-5">
      <base-input
        label="firstName"
        v-model="firstName" />
    </div>

    <div class="flex flex-col mb-5">
      <base-input
        label="surname"
        v-model="surname" />
    </div>

    <div class="flex flex-col mb-5">
      <base-input
        label="email"
        v-model="email" 
      />
    </div>

    <div class="flex justify-between items-center mb-6 font-semibold text-sm">
      <base-checkbox
        v-model='createUserAccount'
        label='createUserAccount' 
      />
    </div>

    <div class="text-center mb-6 md:m-0">
      <BaseButton
        :label="$t('continue').toUpperCase()"
        class="m-auto"
        :disabled="isLoading"
        :isLoading="isLoading"
        @click="handleBtnContinue"
      />
    </div>
    
  </form> 
</template>

<script>
import { hasEmailFormat } from '@/utils/regular-expression.js';
import AlertMixin from '@/config/mixins/alertMixin.js';

export default {
  name: 'GuestForm',
  
  mixins: [AlertMixin],

  data() {
    return {
      isLoading: false,
      firstName: '',
      surname: '',
      email: '',
      createUserAccount: false,
    }
  },

  methods: {
    handleBtnContinue() {
      if (!this.validateForms()) return;
    },

    validateForms() {
      this.alertMessages = [];

      if (!this.email || !this.firstName || !this.surname) {
        this.alertMessages = [ ...this.alertMessages, this.$t('validacionGeneral')];
        this.setAlert(true, 'error', this.alertMessages);
      }

      if (this.email && !hasEmailFormat(this.email)) {
        this.alertMessages = [ ...this.alertMessages, this.$t('invalidEmail')];
        this.setAlert(true, 'error', this.alertMessages);
      }

      if (this.firstName && this.surname && this.email && hasEmailFormat(this.email)) return true;
      else false;
    },
  }
}
</script>