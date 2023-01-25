<template>
  <main class="flex flex-col flex-auto overflow-y-auto overflow-x-hidden bg-stale-200">
    <div class="
      relative
      flex 
      items-center 
      justify-center 
      w-full  
      bg-teal-700
      min-h-[96px]
      md:min-h-[240px]
      lg:min-h-[300px]
      xl:min-h-[400px]
      md:bg-inherit
      md:bg-[url('~/static/img/clubes-santanagolf.jpg')]
      md:bg-center
      md:bg-cover
      md:bg-no-repeat">
      <BaseSearchBar 
        :zonas="zonas"
        @get-filtered-zonas="getFilteredZonas"
      />
      <h4 class="absolute bottom-4 right-4 hidden md:block">
        <a href="#" class="flex flex-col justify-center px-3 py-1 text-sm text-center text-white bg-black opacity-60 hover:opacity-80" title="Santana Golf (Málaga)">
          <span>SANTANA GOLF</span>
          <span class="text-xs">Málaga</span>
        </a>
      </h4>
    </div>

    <div
      class="container mx-auto flex-auto py-5 px-4 md:py-10"
    >
      <h2 class="text-2xl md:text-4xl font-extrabold text-gray-700 text-center mb-5 md:mb-8">Featured regions</h2>
      
      <div v-if="zonasData.length" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-8 xl:gap-16 mb-8 md:mb-10 xl:mb-14">
        <BaseCard
          v-for="zona in zonasData"
          :key="zona.nombre"
          :zona='zona'
        />
      </div>
      <span v-else>
        no result
      </span>
    </div>
  </main>
</template>

<script>


export default {
  name: 'IndexPage',

  layout: 'default',

  data() {
    return {
      zonas: [
        {
          img: 'https://teetimesbooking.dasenred.com/maqueta/img/regiones-mallorca.jpg',
          nombre: 'Mallorca',
          nCourses: 12,
          precioDesde: 42,
        },
        {
          img: 'https://teetimesbooking.dasenred.com/maqueta/img/regiones-lisboa.jpg',
          nombre: 'Lisboa',
          nCourses: 8,
          precioDesde: 36,
        },
        {
          img: 'https://teetimesbooking.dasenred.com/maqueta/img/regiones-costa-sol.jpg',
          nombre: 'Costa del Sol',
          nCourses: 23,
          precioDesde: 19,
        },
        {
          img: 'https://teetimesbooking.dasenred.com/maqueta/img/regiones-andalucia.jpg',
          nombre: 'Andalucía',
          nCourses: 34,
          precioDesde: 26,
        },
      ],
      zonasData: [
        {
          img: 'https://teetimesbooking.dasenred.com/maqueta/img/regiones-mallorca.jpg',
          nombre: 'Mallorca',
          nCourses: 12,
          precioDesde: 42,
        },
        {
          img: 'https://teetimesbooking.dasenred.com/maqueta/img/regiones-lisboa.jpg',
          nombre: 'Lisboa',
          nCourses: 8,
          precioDesde: 36,
        },
        {
          img: 'https://teetimesbooking.dasenred.com/maqueta/img/regiones-costa-sol.jpg',
          nombre: 'Costa del Sol',
          nCourses: 23,
          precioDesde: 19,
        },
        {
          img: 'https://teetimesbooking.dasenred.com/maqueta/img/regiones-andalucia.jpg',
          nombre: 'Andalucía',
          nCourses: 34,
          precioDesde: 26,
        },
      ],
      oldScroll: 0,
      isScrollUp: false,
    }
  },

  mounted() {
    this.$nextTick(() => this.getScrollPosition());
  },

  methods: {
    getScrollPosition() {
      window.addEventListener('scroll', (e) => {
        this.isScrollUp =  this.oldScroll > e.target.scrollingElement.scrollTop;
        this.oldScroll = e.target.scrollingElement.scrollTop;
      })
    },

    getFilteredZonas(e) {
      if (e) this.zonasData = [e];
      else this.zonasData = [];
    }
  }
}
</script>
