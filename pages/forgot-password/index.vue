<template>
  <section class="flex-auto md:bg-slate-200">
    
    <div class="container mx-auto py-5 px-4 md:py-10">

      <h2 class="text-xl font-extrabold text-center mb-5 md:mb-8">{{ $t('recuperarContrasena') }}</h2>

      <!-- isPasswordRecovered is true -->
      <div v-if="isPasswordRecovered">
        <BaseAlert v-if="showBaseAlert" :alert="alert"/>
        <p class="text-center font-semibold">
          {{ $t('goTo')}}
          <BaseLink 
            color="text-amber-500"
            colorHover="hover:text-black"
            :link="linkLogin"
            :disabled="isLoading" 
            hasUnderlineWhenHover
          />
        </p>
        <BaseButton
          :label="$t('goToLogin').toUpperCase()"
          class="m-auto"
          :disabled="isLoading"
          :isLoading="isLoading"
          @click="navToLogin"
        />
      </div>

      <!-- isPasswordRecovered is false -->
      <div v-else>
        <h3 class="text-center mb-5 md:mb-8">{{ $t('introducirEmailRegistro') }}</h3>
      
        <form @submit.prevent="handleRecuperarContrasena" class="max-w-sm mx-auto md:px-6 md:pt-5 md:pb-6 md:mb-8 bg-white md:shadow-sm">
          <BaseAlert v-if="showBaseAlert" :alert="alert"/>
          <div class="flex flex-col mb-0">
            <base-input
              label="email"
              v-model="email"
              marginBottom="mb-0"
            />
          </div>

          <p class="text-gray text-sm mb-5 md:m-2">
            {{ $t('emailOlvidado1') }}
            <BaseLink 
              color="text-amber-500"
              colorHover="hover:text-black"
              :link="linkContactInfo"
              :disabled="isLoading"
              hasUnderlineWhenHover
            />
          </p>

          <div class="text-center mb-5 md:m-0">
            <BaseButton
              :label="$t('recuperarContrasena').toUpperCase()"
              class="m-auto"
              :disabled="isLoading"
              :isLoading="isLoading"
              @click="handleRecuperarContrasena"
            />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { hasEmailFormat } from '@/utils/regular-expression.js';
import AlertMixin from '@/config/mixins/alertMixin.js';

export default {
  name: 'ForgotPasswordPage',

  mixins: [ AlertMixin ],

  data() {
    return {
      isLoading: false,
      email: 'yliu@imaster.golf',
      isPasswordRecovered: false,
      linkContactInfo: {
        label: 'emailOlvidado2',
        path: '/contact-info'
      },
      linkLogin: {
        label: 'Login',
        path: '/login'
      },
    }
  },

  mounted() {
    document.addEventListener('keydown', this.handleDocumentKeydownEnter);
  },

  methods: {
    handleDocumentKeydownEnter({ keyCode }) {
      // Enter keycode is equal to 13
      if (keyCode === 13) {
        if (!this.isPasswordRecovered) this.handleRecuperarContrasena();
        else this.navToLogin();
      }
    },

    async handleRecuperarContrasena() {
      if (!this.validateForms()) return;

      const body = {
        email: this.email,
        avoidSpinner: true,
      };

      try {
        this.isLoading = true;
        await this.$api.usuarios.recuperarPasswordUsuario(body);
        this.setAlert(true, 'success', this.$t('recuperacionClaveCorrecta'));
        this.isPasswordRecovered = true;
      } catch (err) {
        this.setAlert(true, 'error', err.data.msg);
      } finally {
        this.isLoading = false;
      }
    },

    validateForms() {
      if (!this.email || !hasEmailFormat(this.email)) {
        this.setAlert(true, 'error', this.$t('invalidEmail'));
        return false;
      }

      return true;
    },

    navToLogin() {
      this.$router.push({ path: `/${this.$i18n.locale}/login`});
    }
  },

  destroyed() {
    document.removeEventListener('keydown', this.handleDocumentKeydownEnter);
  },
}
</script>