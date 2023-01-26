<template>
  <section class="flex-auto">
    <article class="mx-auto md:flex md:items-center md:mx-0 md:px-7 bg-teal-700 bg-center bg-cover bg-no-repeat md:min-h-[240px] xl:min-h-[320px]" :style="{ 'backgroundImage': compBackgroundImg }">
      <CardClubInfo @data-club="getDatosClub"/>
    </article>

    <FilterBar :text="'Filtro en regiones'" :initDate.sync="fechaBusqueda" @change-date="changeDateFromFilterBar" />

    <div class="container lg:py-10 mx-auto py-5 px-4">
      <div v-if="horasDisponibles.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8 place-content-around auto-rows-min">
        <CardAvaibleHour v-for="hora in horasDisponibles" :key="hora.hora" :hora="hora" :fecha="fechaBusqueda" :info="infoClub"/>
      </div>

      <div v-else-if="horasDisponiblesCercanas.length" class="bg-teal-100 p-6 text-center shadow-sm">
        <div v-if="horasDisponiblesCercanasMismoRecorrido.length">
          <p>{{ $t('greenFeeNearest') }} {{ $t('thisCourse') }} {{ $t('thisCriteria') }}:</p>
          <p class="cursor-pointer font-bold hover:text-slate-500" v-for="(hora, index) in horasDisponiblesCercanasMismoRecorrido" :key="index" @click="changeDate(hora.fechaHoraJuegoPosterior)">
            {{ hora.fechaHoraJuegoPosterior | toLocaleDate }} {{ hora.fechaHoraJuegoPosterior | toLocaleHourDateFormat }}
          </p>
        </div>
        <div v-if="horasDisponiblesCercanasDistintoRecorrido.length">
          <p>{{ $t('greenFeeNearest') }} {{ $t('thisClub') }}:</p>
          <p class="cursor-pointer font-bold hover:text-slate-500" v-for="(hora, index) in horasDisponiblesCercanasDistintoRecorrido" :key="index" @click="changeDateAndCourse(hora.fechaHoraJuegoPosterior,hora.nombreRecorrido, hora.idRecorrido)">
            {{hora.nombreRecorrido}} - {{ hora.fechaHoraJuegoPosterior | toLocaleDate }} {{ hora.fechaHoraJuegoPosterior | toLocaleHourDateFormat }}
          </p>
        </div>
      </div>

      <div v-if="message && message.show" :class="message.class">
        <p>{{ message.msg }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import { createDate } from '@/utils/date';
import CardAvaibleHour from '@/components/club/CardAvaibleHour.vue';
import CardClubInfo from '@/components/club/CardClubInfo.vue';
import FilterBar from '@/components/main/FilterBar.vue';

export default {
  name: 'ClubID',

  components: { CardClubInfo, FilterBar, CardAvaibleHour },

  data() {
    return {
      horasDisponibles: [],
      horasDisponiblesCercanas: [],
      horasDisponiblesCercanasMismoRecorrido: [],
      horasDisponiblesCercanasDistintoRecorrido: [],
      numlistGreenFeesRecorridoDisponible: 0,
      fechaBusqueda: createDate(),
      listaRecorridos: [],
    };
  },

  computed: {
    ...mapState({
      cartLocator: state => state.cart.cartLocator,
      message: state => state.messages.message,
    }),

    /** Imagen a mostrar de fondo según el tamaño */
    compBackgroundImg() {
      if (!this.viewportWidth) return 'url(https://teetimesbooking.com/Images/prestigio/prestigio_12-1x.jpg)';
      if (this.viewportWidth >= 768 ) return `url(https://www.teetimesbooking.com/Images/prestigio/prestigio_146-1x.jpg)`;
      return '';
    },

    recorridoSelected() {
      return this.listaRecorridos.find(recorrido => recorrido.idRec === this.$route.query.rec);
    },

    infoClub() {
      return {
        nombreVP: this.recorridoSelected.clubNombre,
        nombreRecorrido: this.recorridoSelected.nom,
      }
    }
  },

  async mounted() {
    if (localStorage.getItem('selectedHour')) localStorage.removeItem('selectedHour');
    this.fechaBusqueda = createDate(new Date());
    await this.getRecorridosVendor();
    if (this.cartLocator) await this.getCarrito();
    await this.getMensajesTablon();
    await this.getMensajesTablonOfertas();
    await this.getHorasDisponibles(Number(this.$route.query.rec));
  },

  methods: {
    async getRecorridosVendor() {
      const payload = {
        idVendedorProveedor: Number(this.$route.query.idVP),
        idVendedorTourOperador: Number(this.$route.query.idVTO),
      };

      try {
        const response = await this.$api.vendedores.getRecorridosVendedor(payload);
        this.listaRecorridos = response.datos.listaRecorridos;
      } catch (error) {
        console.log('Error on getRecorridosVendor()', error);
      }
    },

    async getCarrito() {
      const payload = { localizador: this.cartLocator };

      try {
        const response = await this.$api.carritosreserva.getCarrito(payload);
        this.$store.dispatch('cart/setCart', JSON.parse(response.datos.jsonCarrito));
      } catch (error) {
        console.log('Error on getCarrito()', error);
      }
    },

    async getMensajesTablon() {
      const payload = {
        idVendedorProveedor: Number(this.$route.query.idVP),
        idVendedorTourOperador: Number(this.$route.query.idVTO),
        tipoMensajeTablon: 1 // Preguntar los diferentes tipos
      };

      try {
        const response = await this.$api.vendedores.getMensajesTablon(payload);
        console.log('getMensajesTablon()', response);
      } catch (error) {
        console.log('Errorn on getMensajesTablon()', error);
      }
    },

    async getMensajesTablonOfertas() {
      const payload = {
        idVendedorProveedor: Number(this.$route.query.idVP),
        idVendedorTourOperador: Number(this.$route.query.idVTO),
      };

      try {
        const response = await this.$api.vendedores.getMensajesTablonOfertas(payload);
        console.log('getMensajesTablonOfertas', response);
      } catch (error) {
        console.log('Error on getMensajesTablonOfertas()', error);
      }
    },

    /** Obtener horas disponibles para un club */
    async getHorasDisponibles(course = 0) {
      const payload = {
        idVendedorProveedor: Number(this.$route.query.idVP),
        idVendedorTourOperador: Number(this.$route.query.idVTO),
        idRecorrido: course,
        fecha: this.fechaBusqueda,
        horaInicio: '6:00',
        horaFin: '22:00',
        jugadores: -1,
        precioInicio: 1,
        precioFin: 2000,
        pageSize: 9,
        pageNum: 1,
        promoCode: '',
        idTarifaTipoUso: 1
      };

      try {
        const response = await this.$api.disponibilidad.getDisponibilidadDia(payload);
        this.horasDisponibles = response.horasDisponibles;
        // Guardar resto de datos y preguntar para que se utilizan

        if (!this.horasDisponibles.length) this.getHorasDisponiblesCercanas();
      } catch (error) {
        this.horasDisponibles = [];
        const body = {
          show: true,
          msg: error.data.msg,
          class: 'bg-red-100 p-6 text-center shadow-sm'
        };

        this.$store.commit('messages/setMessage', body);
      }
    },

    /** Obtener disponibilidad horas días cercanos club */
    async getHorasDisponiblesCercanas() {
      const payload = {
        idVendedorProveedor: Number(this.$route.query.idVP),
        idVendedorTourOperador: Number(this.$route.query.idVTO),
        fecha: this.fechaBusqueda,
        horaInicio: '06:00',
        horaFin: '22:00',
        jugadores: -1,
        precioInicio: 1,
        precioFin: 2000,
        idTarifaTipoUso: 1
      };

      try {
        const response = await this.$api.disponibilidad.getDisponibilidadCercanasDia(payload);
        this.horasDisponiblesCercanas = response.listGreenFeesRecorridoDisponible;
        this.horasDisponiblesCercanasMismoRecorrido = this.horasDisponiblesCercanas.filter(item => item.idRecorrido === Number(this.$route.query.rec) && !item.hayErrorObtenerDisponibilidad);
        this.horasDisponiblesCercanasDistintoRecorrido = this.horasDisponiblesCercanas.filter(item => item.idRecorrido !== Number(this.$route.query.rec) && !item.hayErrorObtenerDisponibilidad);
        this.numlistGreenFeesRecorridoDisponible = response.numlistGreenFeesRecorridoDisponible;
      } catch (error) {
        console.log('Error on getHorasDisponiblesCercanas()', error);
      } finally {
        if (!this.horasDisponiblesCercanas.length) {
          const body = {
            show: true,
            msg: this.$t('noTimes'),
            class: 'bg-teal-100 p-6 text-center shadow-sm'
          };

          this.$store.commit('messages/setMessage', body);
        }
      }
    },

    /** Obtenemos los datos del club
     * @param {Object} data Datos del club incluyendo recorridos o campos según variable 'esMulticampo'
     * @param {Number} recorrido recorrido o campo seleccionado, por defecto el primero que encuentra
     */
    async getDatosClub(data = {}, recorrido = null) {
      if (data.esMultiCampo) {
        this.$router.replace({
          query: {
            ...this.$route.query,
            desc: data.listaRecorridos.find(r => r.idRec === recorrido).nombre.split(' - ')[0],
            rec: recorrido,
            precioDesde: 1,
            precioHasta: 2000,
            tee: data.listaRecorridos.find(r => r.idRec === recorrido).nombre.split(' - ')[1]
          }
        });
        this.$nuxt.refresh();
      } else {
        this.$router.replace({
          query: {
            ...this.$route.query,
            desc: data.listaRecorridos.find(r => r.idRec === recorrido).nombre.split(' - ')[0],
            rec: recorrido,
            precioDesde: 1,
            precioHasta: 2000,
            tee: data.listaRecorridos.find(r => r.idRec === recorrido).nombre.split(' - ')[1]
          }
        });
        await this.getHorasDisponibles(recorrido);
      }
    },

    /** Cambiar de fecha desde componente FilterBar
     * @param {Date|String} date Nueva fecha seleccionada
     */
    changeDateFromFilterBar(date = new Date()) {
      this.$router.replace({ query: { ...this.$route.query, fecha: createDate(new Date(date)), horaInicio: '06:00', horaFin: '22:00' }});
      this.getHorasDisponibles(Number(this.$route.query.rec));
    },

    /** Cambiar de fecha para emitir a FilterBar
     * @param {Date|String} date Nueva fecha seleccionada
     */
    changeDate(date = new Date()) {
      this.fechaBusqueda = createDate(new Date(date));
    },

    /** Cambiar de fecha y recorrido
     * @param {Date|String} date Nueva fecha seleccionada
     * @param {Number} course Nuevo recorrido seleccionado
     */
    changeDateAndCourse(date = new Date(),courseName = '', course = 0) {
      this.$router.replace({ query: { ...this.$route.query, fecha: createDate(new Date(date)), tee: courseName, rec: course }});
      this.fechaBusqueda = createDate(new Date(date));
      this.getHorasDisponibles(course);
    },

  },

  destroyed() {
    this.$store.commit('messages/setMessage', { show: false, msg: null, class: null });
  }
}
</script>

