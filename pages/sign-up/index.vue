<template>
  <section class="flex-auto md:bg-slate-200">
    
    <div class="container mx-auto py-5 px-4 md:py-10">

      <h2 class="text-xl font-extrabold text-center mb-5 md:mb-8">{{ $t('userRegistration') }}</h2>
      
      <form @submit.prevent="handleRegistrarse" class="md:px-6 md:pt-5 md:pb-6 md:mb-8 bg-white md:shadow-sm">
        <BaseAlert v-if="showBaseAlert" :alert="alert"/>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mb-6">
          <base-input
            label="email"
            v-model="email" />
          <base-input
            type="password"
            label="password"
            v-model="contrasena" />
          <base-input
            type="password"
            label="confirmPassword"
            v-model="contrasenaToConfirmar" />
        </div>
         
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 mb-6">
          <base-input
            label="name"
            v-model="nombre" />
          <base-input
            label="surname"
            v-model="apellidos" />
        </div> 

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 mb-6">
          <base-input
            label="phone"
            v-model="telefono" />
          <base-autocomplete
            label='country'
            v-model='pais.selected'
            :items='pais.options' />
        </div> 
         
        <div class="flex items-baseline lg:items-center mb-6">
          <div class="pt-1 lg:p-0 lg:flex lg:items-center">
            <input 
              type="checkbox" 
              id="conditionsCheck" 
              class="w-3 h-3 lg:w-4 lg:h-4"
              :class="`${isLoading ? 'disabled' : ''}`" 
              :disabled="isLoading"
              :value="haveReadConditions" 
              :checked="haveReadConditions" 
              @change="handleHaveReadConditions"/> 
          </div>
          <label for="conditionsCheck" class="ml-2 text-sm">
            {{ $t('privacyPolicySentence') }}
            <BaseLink 
              color="text-amber-500"
              colorHover="hover:text-black"
              :link="linkPrivacyPolicy"
              :disabled="isLoading" 
              hasUnderlineWhenHover
            />
            {{ $t('and') }}
            <BaseLink 
              color="text-amber-500"
              colorHover="hover:text-black"
              :link="linkTerminosCondiciones"
              :disabled="isLoading" 
              hasUnderlineWhenHover
            />
            {{$t('ofTeeTimesBookingPortal') }}
          </label>
        </div>

        <div class="text-center mb-6 md:m-0">
          <BaseButton
            :label="$t('registrarse').toUpperCase()"
            class="m-auto"
            :disabled="isLoading"
            :isLoading="isLoading"
            @click="handleRegistrarse"
          />
        </div>
        
      </form> 

    </div>

  </section>
</template>

<script>
import { hasEmailFormat } from '@/utils/regular-expression.js';
import { saveUserLoginDataInStoreAndCookie } from '@/utils/userLoginData.js';
import AlertMixin from '@/config/mixins/alertMixin.js';

export default {
  mixins: [AlertMixin],
  data() {
    return {
      isLoading: false,
      email: null,
      contrasena: null,
      contrasenaToConfirmar: null,
      nombre: null,
      apellidos: null,
      telefono: '212',
      haveReadConditions: false,
      pais: {
        selected: null,
        options: []
      },
      linkPrivacyPolicy: {
        path: '/privacy-policy',
        label: 'privacyPolicy'
      },
      linkTerminosCondiciones: {
        path: '/terms-and-conditions',
        label: 'termsAndConditions'
      },
      alertMessages: [],
    };
  },

  mounted() {
    document.addEventListener('keydown', this.handleDocumentKeydownEnter);
    this.getPaises();
  },

  methods: {
    async getPaises() {
      try {
        const response = await this.$api.paises.obtenerPaises();
        this.pais.options = response.datos.listaPaises.map(pais => ({ value: pais.codigo, label: pais.nombre}));
      } catch (err) {
        this.setAlert(true, 'error', err.data.msg);
      }
    },

    handleDocumentKeydownEnter({ keyCode }) {
      // Enter keycode is equal to 13
      if (keyCode === 13) this.handleRegistrarse();
    },

    async handleRegistrarse() {
      if (!this.validateForms()) return;

      const body = {
        nombre: this.nombre,
        apellidos: this.apellidos,
        email: this.email,
        password: this.contrasena,
        telefono: this.contrasenaToConfirmar,
        pais: this.pais.selected,
        idCulturaUsuario: 2, // Ignacio va a analisar si es necesario 
        avoidSpinner: true,
      };
      try {
        this.isLoading = true;
        await this.$api.usuarios.crearUsuario(body);
        this.setAlert(false);
        this.handleLogin();
      } catch (err) {
        this.setAlert(true, 'error', err.data.msg);
      } finally {
        this.isLoading = false;
      }
    },

    async handleLogin() {
      const body = {
        email: this.email,
        password: this.contrasena,
        avoidSpinner: true,
      };

      try {
        this.isLoading = true;
        await this.$api.usuarios.logarUsuario(body);
        saveUserLoginDataInStoreAndCookie(response.datos, $store);

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
      if (!this.email || !this.contrasena || !this.nombre || !this.apellidos || !this.telefono || !this.pais.selected ) {
        this.alertMessages = [ ...this.alertMessages, this.$t('validacionGeneral')]
        this.setAlert(true, 'error', this.alertMessages);
      }

      if (this.email && !hasEmailFormat(this.email)) {
        console.log('email', this.email)
        this.alertMessages = [ ...this.alertMessages, this.$t('invalidEmail')]
        this.setAlert(true, 'error', this.alertMessages);
      }

      if (this.contrasena && this.contrasena.length < 6) {
        this.alertMessages = [ ...this.alertMessages, this.$t('validacionContrasena')]
        this.setAlert(true, 'error', this.alertMessages);
      }

      if (this.contrasena && this.contrasenaToConfirmar && (this.contrasena !== this.contrasenaToConfirmar)) {
        this.alertMessages = [ ...this.alertMessages, this.$t('passwordNotSame')]
        this.setAlert(true, 'error', this.alertMessages);
      }

      if (!this.haveReadConditions) {
        this.alertMessages = [ ...this.alertMessages, this.$t('validacionCondiciones')]
        this.setAlert(true, 'error', this.alertMessages);
      }

      if (this.email && this.contrasena && this.nombre && this.apellidos && this.telefono && this.pais.selected && hasEmailFormat(this.email) && this.contrasena.length >= 6 && this.contrasena === this.contrasenaToConfirmar && this.haveReadConditions) return true;
      else return false;
    },

    handleHaveReadConditions() {
      this.haveReadConditions = !this.haveReadConditions;
    }
  },

  destroyed() {
    document.removeEventListener('keydown', this.handleDocumentKeydownEnter);
  },
}
</script>