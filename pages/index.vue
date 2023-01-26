<template>
  <section class="flex-auto bg-slate-200">

    <SelectedClubAndSearchBar v-if="club" :club="club" :compBackgroundImg="compBackgroundImg"/>

    <div class="container mx-auto py-5 px-4 md:py-10">
      <h2 class="text-2xl md:text-4xl font-extrabold text-center mb-5 md:mb-8">{{ $t('featuredRegions') }}</h2>

      <!-- With skeleton -->

      <!-- <transition-group class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-8 xl:gap-16 mb-8 md:mb-10 xl:mb-14">
        <template v-if="isCardFeaturedRegionSkeletonLoading">
          <CardFeaturedRegionSkeleton
            v-for="(item, index) in itemsRegionesSkeleton" 
            :key="index" 
          />
        </template>
        
        <template v-if="regiones.length && !isCardFeaturedRegionSkeletonLoading">
          <CardFeaturedRegion
            v-for="region in regiones"
            :key="region.id"
            :region='region'
          />
        </template>
      </transition-group> -->

      <!-- Without skeleton -->

      <transition-group v-if="regiones.length" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-8 xl:gap-16 mb-8 md:mb-10 xl:mb-14">
        <!-- <template v-if="regiones.length"> -->
          <CardFeaturedRegion
            v-for="region in regiones"
            :key="region.id"
            :region='region'
          />
        <!-- </template> -->
      </transition-group>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import SelectedClubAndSearchBar from '@/components/main/SelectedClubAndSearchBar.vue';
import CardFeaturedRegion from '@/components/main/CardFeaturedRegion.vue';
import CardFeaturedRegionSkeleton from '@/components/main/skeletones/CardFeaturedRegionSkeleton.vue';

export default {
  name: 'IndexPage',

  layout: 'default',

  components: { CardFeaturedRegion, CardFeaturedRegionSkeleton, SelectedClubAndSearchBar },


  data() {
    return {
      regiones: [],
      club: null,
      zonas: [],
      regionesResponse: null,
      showBaseAlert: false,
      alert: {
        type: 'success',
        title: 'Error title',
        messages: ['Error 1', 'Error 2'],
      },
      itemsRegionesSkeleton: [1, 2, 3, 4, 5, 6, 7, 8],
      isCardFeaturedRegionSkeletonLoading: false,
    }
  },

  async fetch() {
    await this.getRegiones();
    await this.getRandomClub();
  },

  computed: {
    ...mapState({
      viewportWidth: state => state.viewportWidth,
    }),

    /** Imagen a mostrar de fondo según tamaño */
    compBackgroundImg() {
      if (!this.viewportWidth) return 'url(https://teetimesbooking.dasenred.com/maqueta/img/clubes-santanagolf.jpg)';
      if (this.viewportWidth >= 768 ) return `url(${this.club.img})`;
      return '';
    }
  },

  methods: {
    /** Fake API club aleatorio */
    fetchRandomClub() {
      return new Promise((resolve) => {
        const clubes = [
          { nombre: 'Santana Golf', ciudad: 'Málaga', altFoto: 'Santana Golf', img: 'https://teetimesbooking.dasenred.com/maqueta/img/clubes-santanagolf.jpg' },
          { nombre: 'Santana Golf 1', ciudad: 'Jaén', altFoto: 'Santana Golf', img: 'https://teetimesbooking.dasenred.com/maqueta/img/clubes-santanagolf.jpg' },
          { nombre: 'Santana Golf 2', ciudad: 'Córdoba', altFoto: 'Santana Golf', img: 'https://teetimesbooking.dasenred.com/maqueta/img/clubes-santanagolf.jpg' },
          { nombre: 'Santana Golf 3', ciudad: 'Sevilla', altFoto: 'Santana Golf', img: 'https://teetimesbooking.dasenred.com/maqueta/img/clubes-santanagolf.jpg' },
        ];

        const randomClub = Math.floor(Math.random() * (clubes.length - 1));
        resolve(clubes[randomClub]);
      });
    },

    /** Obtener un club aleatorio */
    async getRandomClub() {
      try {
        const response = await this.fetchRandomClub();
        
        this.club = response;
      } catch (error) {
        // alert({ error });
      }
    },
    
    /** Obtener regiones */
    async getRegiones() {
      try {
        this.isCardFeaturedRegionSkeletonLoading = true;
        const response = await this.$api.home.getListarCajitas();
        this.regiones = response.listaCajitas.map(region => ({ id: region.idCajita, nombre: region.desc, isLocation: true, nCourses: region.numRecorridos, precioDesde: 0, altFoto: region.desc, img: region.imagen, titulo: region.titulo }));
      } catch (err) {
        console.log('catch getRegiones', err.data.msg);
      } finally {
        this.isCardFeaturedRegionSkeletonLoading = false;
      }
    },
  }
}
</script>

<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity .5s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
