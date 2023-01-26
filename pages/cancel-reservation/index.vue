<template>
  <section class="flex-auto md:bg-slate-200">
    <div class="container mx-auto py-5 px-4 md:py-10">
      <h2 class="text-xl font-extrabold text-center mb-5 md:mb-8">{{ $t('cancelReservation') }}</h2>
      <div v-if="isReservationCanceled">
        <BaseAlert v-if="showBaseAlert" :alert="alert"/>
      </div>
      <div v-else>
        <h3 class="text-center">{{ $t('datosLocalizador')}}</h3>
      </div>
    </div>

    <div v-if="!isReservationCanceled">
      <form @submit.prevent="handleEnviar" class="max-w-sm mx-auto md:px-6 md:pt-5 md:pb-6 md:mb-8 bg-white md:shadow-sm">
        <BaseAlert v-if="showBaseAlert" :alert="alert"/>
        <div class="flex flex-col mb-5">
          <base-input
            label="Localizador"
            v-model="localizador" 
          />
        </div>
        <div class="text-center mb-5 md:m-0">
          <BaseButton
            :label="$t('enviar').toUpperCase()"
            class="m-auto"
            :disabled="isLoading"
            :isLoading="isLoading"
            @click="handleEnviar"
          />
        </div>
      </form>
    </div>
    <div v-else>
      <BaseButton
        :label="$t('goToHomePage').toUpperCase()"
        class="m-auto"
        :disabled="isLoading"
        :isLoading="isLoading"
        @click="navToHomePage"
      />
    </div>
  </section>
</template>

<script>
import AlertMixin from '@/config/mixins/alertMixin.js';

export default {
  mixins: [AlertMixin],

  data() {
    return {
      localizador: '',
      isLoading: false,
      localizadorCancelacion: '',
      isReservationCanceled: false,
    };
  },

  mounted() {
    document.addEventListener('keydown', this.handleDocumentKeydownEnter);
  },

  methods: {
    handleDocumentKeydownEnter({ keyCode }) {
      // Enter keycode is equal to 13
      if (keyCode === 13) {
        if (!this.isReservationCanceled) this.handleEnviar();
        else this.navToHomePage();
      }
    },

    handleEnviar() {
      if (!this.validateForms()) return;
      
      this.checkIsCancelacionValida();
    },

    async checkIsCancelacionValida() {
      const body = {
        localizador: this.localizador, 
        avoidSpinner: true,
      };

      try {
        this.setAlert(false);
        this.isLoading = true;

        await this.$api.precancelacion.getTipoCancelacion(body);
        this.realizarPreCancelacionWeb();
      } catch (err) {
        this.setAlert(true, 'error', err.data.msg);
      } finally {
        this.isLoading = false;
      }
    },

    async realizarPreCancelacionWeb() {
      const body = {
        localizador: this.localizador,
        idPlataforma: 2,
        avoidSpinner: true,
      };

      try {
        this.setAlert(false);
        this.isLoading = true;

        const response = await this.$api.precancelacion.realizarPreCancelacionWeb(body);
        this.localizadorCancelacion = response.localizadorCancelacion; 
        this.realizarCancelacion();
      } catch (err) {
        this.setAlert(true, 'error', err.data.msg);
      } finally {
        this.isLoading = false;
      }
    },

    async realizarCancelacion() {
      const body = {
        localizador: this.localizador,
        localizadorCancelacion: this.localizadorCancelacion,
        avoidSpinner: true,
      };

      try {
        this.setAlert(false);
        this.isLoading = true;

        await this.$api.cancelacion.doRealizarCancelacion(body);
        this.isReservationCanceled = true;
        this.setAlert(true, 'success', this.$t('cancelacionCorrecta'));
      } catch (err) {
        this.setAlert(true, 'error', err.data.msg);
      } finally {
        this.isLoading = false;
      }
    },

    validateForms() {
      if (this.localizador.length !== 8) {
        this.setAlert(true, 'error', this.$t('localizadorNoValido'));
        return false;
      }

      return true;
    },

    navToHomePage() {
      this.$router.push({ path: `/${this.$i18n.locale}` });
    }
  },

  destroyed() {
    document.removeEventListener('keydown', this.handleDocumentKeydownEnter);
  },
}
</script>