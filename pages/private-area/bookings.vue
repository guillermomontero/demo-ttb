<template>
  <section class="flex-auto md:bg-slate-200">
    <div class="container mx-auto py-5 px-4 md:py-10">
      <PrivateAreaNavBar />
      <BaseAlert v-if="showBaseAlert" :alert="alert"/>
      <BaseTable
        isTableRowClickable
        :table='table'
        :sortingField="sortingField"
        @headerClick="handleHeaderClick"
        @clickRow="clickRow"
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
    PrivateAreaNavBar
  },

  mixins: [BaseTableMixin, AlertMixin],

  data() {
    return {
      table: {
        headers: [
          { id: 'name-id', value: 'fechaReserva', text: 'fechaReserva', type: 'string', sortingDirection: null, isFirstItem: true,},
          { id: 'sale-id', value: 'localizador', text: 'localizador', type: 'number', sortingDirection: null },
        ],  
        items: [],
      },
      items: []
    }
  },

  mounted() {
    this.getTableItems();
  },

  methods: {
    async getTableItems() {
      try {
        const response = await this.$api.usuarios.obtenerReservasUsuario();
        const clonedReservas = structuredClone(response.reservas);
        clonedReservas.forEach(reserva => {
          reserva.fechaReserva= toLocaleDate(reserva.fechaReserva)
        })
        this.items = clonedReservas;
      } catch (err) {
        this.setAlert(true, 'error', err.data.msg);
      }

      this.originTablaItems = structuredClone(this.items);
      this.table.items = structuredClone(this.items);
    },

    clickRow(e) {
      window.open(`/${this.$i18n.locale}/detalle?localizador=${e.localizador}`);
    }
  }
}
</script>