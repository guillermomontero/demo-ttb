<template>
  <section class="flex-auto">
    <FilterBar :text="'Filtro en regiones'" :initDate="fechaBusqueda" @change-date="changeDate"/>

    <div class="container lg:py-10 mx-auto py-5 px-4">
      <div class="w-full flex flex-row items-center justify-between pb-6">
        <h1 class="text-2xl font-bold">{{ region }}</h1>
        <div class="flex flex-row items-center flex-end flex-nowrap">
          <base-select :item="regionFilters" class="mr-2" @change="filterResults"/>
          <h3 class="text-base font-bold">{{ clubs.length }} {{ $t('results') }}</h3>
        </div>
      </div>

      <!-- With skeleton -->

      <!-- <transition-group name="fade-in" tag="ul" class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 lg:gap-8 place-content-around auto-rows-min">
        <template v-if="isRegionCardClubSkeletonLoading">
          <RegionCardClubSkeleton v-for="(item, index) in skeletonItems" :key="index"/>
        </template>
        <template v-else>
          <RegionCardClub v-for="(club, index) in clubs" :key="index" :club="club"/>
        </template>
      </transition-group> -->

      <!-- Without skeleton -->
      <transition-group name="fade-in" tag="ul" class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 lg:gap-8 place-content-around auto-rows-min">
        <template v-if="!isRegionCardClubSkeletonLoading">
          <RegionCardClub v-for="(club, index) in clubs" :key="index" :club="club"/>
        </template>
      </transition-group>
    </div>
  </section>
</template>

<script>
import { createDate } from '@/utils/date';
import RegionCardClub from '@/components/region/RegionCardClub.vue';
import RegionCardClubSkeleton from '@/components/region/skeletones/RegionCardClubSkeleton.vue';
import FilterBar from '@/components/main/FilterBar.vue';
import BaseSelect from '~/components/base/BaseSelect.vue';

export default {
  name: 'IdRegion',
  
  components: { RegionCardClub, FilterBar, RegionCardClubSkeleton, BaseSelect },

  data() {
    return {
      isRegionCardClubSkeletonLoading: false,
      clubs: [],
      fechaBusqueda: createDate(),
      region: null,
      skeletonItems: [1, 2, 3, 4, 5, 6, 7, 8],
      regionFilters: {
        name: 'Filters',
        selected: 1,
        options: [
          { label: 'Más cercanos', value: 1 },
          { label: 'Más lejanos', value: 2 },
          { label: 'Más baratos', value: 3 },
          { label: 'Más caros', value: 4 },
        ]
      }
    };
  },

  mounted() {
    this.region = this.$route.params.id;
    this.fechaBusqueda = this.$route.query.fecha;
    this.getClubes();
  },

  methods: {
    /** Obtener los clubes */
    async getClubes() {
      const payload = {
        idMunicipio: this.$route.query.municipio === 'true' ? this.$route.query.id : null,
        fecha: this.fechaBusqueda,
        distancia: 5,
        jugadores: -1,
        idLista: this.$route.query.municipio === 'true' ? null : this.$route.query.id,
      };

      try {
        this.isRegionCardClubSkeletonLoading = true;
        const response = await this.$api.busqueda.getListarResultados(payload);
        console.log(response.listaClubes);
        this.clubs = response.listaClubes.map(club => ({
          ...club,
          clubPath: {
            path: `/club/${club.nombreClub.replaceAll(' ', '-')}`,
            query: {
              tee: club.nombreRecorrido.replaceAll(' ', '-'),
              desc: club.nombreClub,
              fecha: createDate(new Date(this.fechaBusqueda)),
              idVP: club.idVP,
              idVTO: club.idVTO,
              rec: club.idR,
              hora: 'a',
              horaInicio: club.horaIni,
              horaFin: club.horaFin,
              precioDesde: club.precioDesde,
              precioHasta: club.precioHasta,
              numJug: -1,
              prMin: 1,
              prMax: 550,
              seId: -1,
              seS: '',
              seD: 5,
              seT: '',
              seF: '',
            }
          },
        }));
      } catch (error) {
        console.log('Catch getResultadosRegion', error.data.msg);
      } finally {
        this.isRegionCardClubSkeletonLoading = false;
      }
    },

    /** Cambiar de fecha
     * @param {Date|String} date Nueva fecha seleccionada
     */
    changeDate(date = new Date()) {
      this.$router.replace({ query: { ...this.$route.query, fecha: createDate(new Date(date)) }});
      this.fechaBusqueda = createDate(new Date(date));
      this.getClubes();
    },

    filterResults() {
      if (this.regionFilters.selected === 1) this.clubs.sort((a, b) => a.distancia - b.distancia);
      if (this.regionFilters.selected === 2) this.clubs.sort((a, b) => b.distancia - a.distancia);
      if (this.regionFilters.selected === 3) this.clubs.sort((a, b) => a.precioDesde - b.precioDesde);
      if (this.regionFilters.selected === 4) this.clubs.sort((a, b) => b.precioDesde - a.precioDesde);
    }
  }
}
</script>

<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 1s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>