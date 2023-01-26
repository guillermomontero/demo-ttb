<template>
  <section>
    <h3 class="font-bold text-gray-700 bg-slate-100 py-2 px-1 text-center mb-3 md:mb-0 md:text-left md:py-3 md:px-6 md:shadow-sm">{{ $t('personalInformation')}}</h3>

    <form class="md:px-6 md:pt-5 md:pb-6 mb-10 md:mb-8 bg-white md:shadow-sm">
      <BaseAlert v-if="showBaseAlert" :alert="alert"/>
        
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 mb-6">
        <base-input
          label="name"
          v-model="name" 
        />
        <base-input
          label="surname"
          v-model="surname" 
        />
      </div> 

      <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mb-6">
        <base-input
          label="email"
          v-model="email" 
        />
        <base-input
          label="phone"
          v-model="phone" 
        />
        <base-autocomplete
          label='country'
          v-model='country.selected'
          :items='country.options'
        />
      </div>  

      <div class="md:m-0">
        <BaseButton
          label="guardarCambios"
          class="m-auto"
          :disabled="isLoading"
          :isLoading="isLoading"
          @click="handlePersonalInformation"
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
      name: '',
      surname: '',
      email: 'yliu@imaster.golf',
      phone: '',
      country: {
        selected: null,
        options: []
      },
      alertMessages: [],
    }
  },

  mounted() {
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

    handlePersonalInformation() {
      if (this.validateForms()) this.savePersonalInformation();
    },

    validateForms() {
      this.alertMessages = [];

      if (!this.name || !this.surname || !this.email || !this.phone || !this.country.selected) {
        this.alertMessages = [ ...this.alertMessages, this.$t('validacionGeneral')];
        this.setAlert(true, 'error', this.alertMessages);
      }

      if (this.email && !hasEmailFormat(this.email)) {
        this.alertMessages = [ ...this.alertMessages, this.$t('invalidEmail')];
        this.setAlert(true, 'error', this.alertMessages);
      }

      if (this.name && this.surname && this.phone && this.email && this.country.selected && hasEmailFormat(this.email)) return true;
      return false
    },

    async savePersonalInformation() {
      const body = {
        nombre: this.name,
        apellidos: this.surname,
        email: this.email,
        telefono: this.phone,
        pais: this.country.selected,
        avoidSpinner: true,
      };

      try {
        this.isLoading = true;
        await this.$api.usuarios.modificarUsuario(body);
        this.setAlert(true, 'success', this.$t('modificacionUsuarioCorrecta'));
      } catch (err) {
        this.setAlert(true, 'error', err.data.msg);
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>