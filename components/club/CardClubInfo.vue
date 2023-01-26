<template>
  <article v-if="datosClubSelected" class="flex flex-row items-center bg-white md:shadow-sm px-6 py-4">
    <div class="w-1/2 pr-4">
      <img class="" src="data:image/png;base64,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" alt="">
    </div>
    <div class="w-1/2 flex items-center justify-center">      
      <div class="px-4 py-4 text-xs lg:text-sm text-center bg-slate-100">
        <p class="lg:text-base font-bold">{{ datosClubSelected.nombre }}</p>
        <p class="lg:text-base">{{ datosClubSelected.direccion }}</p>
        <p>{{ datosClubSelected.codigoPostal }} {{ datosClubSelected.lugar }}</p>
        <base-select :item="recorridos" @change="changeRecorrido"/>
      </div>
    </div>
  </article>
</template>

<script>
import BaseSelect from '~/components/base/BaseSelect.vue';

export default {
  name: 'CardClubInfo',

  components: { BaseSelect },

  
  data() {
    return {
      datosClub: null,
      datosClubSelected: null,
      recorridos: { name: null, selected: null, options: [] },
    };
  },

  async fetch() {
    await this.getDatosClub();
  },

  methods: {
    async getDatosClub() {
      const payload = { idVendedorProveedor: Number(this.$route.query.idVP) };

      try {
        const response = await this.$api.vendedores.getDatosClubTTB(payload);
        this.datosClub = response.datos;
        this.recorridos.name = 'Filters'
        this.recorridos.options = this.datosClub.listaRecorridos.map(recorrido => ({ label: recorrido.nombre, value: recorrido.idRec }))
        this.recorridos.selected = this.recorridos.options.find(recorrido => recorrido.value === Number(this.$route.query.rec)).value || this.recorridos.options[0].value;

        this.datosClubSelected = this.datosClub.listaRecorridos.find(recorrido => recorrido.idRec === this.recorridos.selected);
      } catch (error) {
        setAlert(true, error.data.msg, 'error');
      }
    },

    changeRecorrido() {
      this.$emit('data-club', this.datosClub, this.recorridos.selected);
    }
  }
};
</script>
