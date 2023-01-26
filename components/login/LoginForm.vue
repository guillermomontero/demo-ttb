<template>
  <form @submit.prevent="handleAcceder" class="max-w-sm mx-auto md:px-6 md:pt-5 md:pb-6 md:mb-8 bg-white md:shadow-sm">
    <BaseAlert v-if="showBaseAlert" :alert="alert"/>
    <div class="flex flex-col mb-5">
      <base-input
        label="email"
        v-model="email" 
      />
    </div>

    <div class="flex flex-col mb-6">
      <base-input
        type="password"
        label="password"
        v-model="contrasena" 
      />
    </div>

    <div class="flex justify-between items-center mb-6 font-semibold text-sm">
      <base-checkbox
        v-model='recordarme'
        label='remindMe' 
      />
      <BaseLink 
        color="text-amber-500" 
        colorHover="hover:text-black" 
        :link="linkForgotPassword" 
        :disabled="isLoading"
      />
    </div>

    <div class="text-center mb-5 md:m-0">
      <BaseButton
        :label="$t('acceder').toUpperCase()"
        class="m-auto"
        :disabled="isLoading"
        :isLoading="isLoading"
        @click="handleAcceder"
      />
    </div>
  </form>
</template>

<script>
import { hasEmailFormat } from '@/utils/regular-expression.js';
import { saveUserLoginDataInStoreAndCookie } from '@/utils/userLoginData.js';
import AlertMixin from '@/config/mixins/alertMixin.js';

export default {
  name: 'LoginForm',
  
  mixins: [AlertMixin],

  props: {
    activeKeydownEnter: { type: Boolean, default: false },
  },

  data() {
    return {
      isLoading: false,
      email: 'davidgarridoantonio@hotmail.com',
      contrasena: '123456',
      recordarme: false,
      linkForgotPassword: {
        label: 'forgotPassword',
        path: '/forgot-password'
      },
      alertMessages: [],
    };
  },

  mounted() {
    if (this.activeKeydownEnter) document.addEventListener('keydown', this.handleDocumentKeydownEnter);
  },

  methods: {
    handleDocumentKeydownEnter({ keyCode }) {
      // Enter keycode is equal to 13
      if (keyCode === 13) this.handleAcceder();
    },

    async handleAcceder() {
      if (!this.validateForms()) return;

      const body = {
        email: this.email,
        password: this.contrasena,
        avoidSpinner: true,
      };

      try {
        this.isLoading = true;
        const response = await this.$api.usuarios.logarUsuario(body);
        saveUserLoginDataInStoreAndCookie(response.datos, this.$store, this.$nuxt);
        this.setAlert(false);
        this.$router.push({ path: `/${this.$i18n.locale}/private-area/my-profile/`});
      } catch (err) {
        this.setAlert(true, 'error', err.data.msg);
      } finally {
        this.isLoading = false;
      }
    },

    validateForms() {
      this.alertMessages = [];

      if (!this.email || !this.contrasena) {
        this.alertMessages = [ ...this.alertMessages, this.$t('validacionGeneral')];
        this.setAlert(true, 'error', this.alertMessages);
      }

      if (this.email && !hasEmailFormat(this.email)) {
        this.alertMessages = [ ...this.alertMessages, this.$t('invalidEmail')];
        this.setAlert(true, 'error', this.alertMessages);
      }

      if (this.contrasena && this.contrasena.length < 6) {
        this.alertMessages = [ ...this.alertMessages, this.$t('validacionContrasena')];
        this.setAlert(true, 'error', this.alertMessages);
      }

      if (this.email && this.contrasena && hasEmailFormat(this.email) && this.contrasena.length >= 6) return true;
      else false;
    },
  },

  destroyed() {
    document.removeEventListener('keydown', this.handleDocumentKeydownEnter);
  },
}
</script>