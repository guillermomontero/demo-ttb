<template>
  <section class="flex-auto md:bg-slate-200">

    <div class="container mx-auto py-5 px-4 md:py-10">
      <PrivateAreaNavBar />
      <BaseAlert v-if="showBaseAlert" :alert="alert"/>
      <BaseTable
        :table='table'
        :sortingField="sortingField"
        @headerClick="handleHeaderClick"
      />
    </div>

  </section>
</template>

<script>
import PrivateAreaNavBar from '@/components/private-area/coumn/PrivateAreaNavBar.vue';
import BaseTableMixin from '@/config/mixins/BaseTableMixin.js';
import AlertMixin from '@/config/mixins/alertMixin.js';
import {toLocaleDate} from '@/utils/date.js';
export default {
  components: {
    PrivateAreaNavBar,
  },

  mixins: [BaseTableMixin, AlertMixin],

  data() {
    return {
      table: {
      headers: [
        { id: 'numeroTarjeta', value: 'numeroTarjeta', text: 'numeroTarjeta', type: 'string', sortingDirection: null, isFirstItem: true,},
        { id: 'caducidadTarjeta', value: 'caducidadTarjeta', text: 'caducidadTarjeta', type: 'number', sortingDirection: null },
      ],  
      items: [],
      actions: [
        { label: 'search', url: require('~/static/img/ico-search.svg'), fct: (e) => this.eliminarTarjetaUsuario(e) },
      ]
    },
    items: []
    }
  },

  mounted() {
    this.getTarjetasUsuario();
  },

  methods: {
    async getTarjetasUsuario() {
      try {
        const response = await this.$api.usuarios.listarTarjetasUsuario();
        const clonedTarjetas = structuredClone(response.datos.listaTarjetas);
        clonedTarjetas.forEach(tarjeta => {
          tarjeta.caducidadTarjeta= toLocaleDate(tarjeta.caducidadTarjeta)
        })
        this.items = clonedTarjetas;
      } catch (err) {
        this.setAlert(true, 'error', err.data.msg);
      }

      this.originTablaItems = structuredClone(this.items);
      this.table.items = structuredClone(this.items);
    },

    async eliminarTarjetaUsuario(e) {
      const body = {
        idUsuarioTarjeta: e.idUsuarioTarjeta
      };
      try {
        await this.$api.usuarios.eliminarTarjetaUsuario(body);
        this.setAlert(true, 'success', this.$t('cardSuccessfullyDeleted'));
        await this.getTarjetasUsuario();
      } catch (err) {
        this.setAlert(true, 'error', err.data.msg);
      }
     },
  }

}
</script>