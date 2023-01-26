<template>
  <section class="flex-auto md:bg-slate-200">
    <div class="container mx-auto py-5 px-4 md:py-10">

      <!-- SECCIÓN CABECERA -->
      <h2 class="text-lg md:text-xl font-extrabold text-center mb-1">{{ $t('AñadirJugadores') }}</h2>
      <p class="text-sm md:text-base text-center mb-1 md:mb-2">{{ $t('MasDeUnoPorRate') }}</p> 
      <div class="flex items-center justify-center mb-5 md:mb-8">
        <svg class="fill-gray-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m459.75 44.527344h-24.5625v-29.527344c0-8.285156-6.714844-15-15-15-8.28125 0-15 6.714844-15 15v29.527344h-54.152344v-29.527344c0-8.285156-6.714844-15-15-15-8.28125 0-15 6.714844-15 15v29.527344h-53.496094v-29.527344c0-8.285156-6.714843-15-15-15-8.28125 0-15 6.714844-15 15v29.527344h-54.152343v-29.527344c0-8.285156-6.714844-15-15-15-8.28125 0-15 6.714844-15 15v29.527344h-54.152344v-29.527344c0-8.285156-6.714844-15-15-15s-15 6.714844-15 15v29.527344h-16.984375c-28.8125 0-52.25 23.4375-52.25 52.25v362.972656c0 28.8125 23.4375 52.25 52.25 52.25h407.5c28.8125 0 52.25-23.4375 52.25-52.25v-362.972656c0-28.8125-23.4375-52.25-52.25-52.25zm-407.5 30h16.984375v20.554687c0 8.28125 6.714844 15 15 15s15-6.71875 15-15v-20.554687h54.152344v20.554687c0 8.28125 6.714843 15 15 15 8.285156 0 15-6.71875 15-15v-20.554687h54.152343v20.554687c0 8.28125 6.71875 15 15 15 8.285157 0 15-6.71875 15-15v-20.554687h53.496094v20.554687c0 8.28125 6.714844 15 15 15s15-6.71875 15-15v-20.554687h54.152344v20.554687c0 8.28125 6.714844 15 15 15s15-6.71875 15-15v-20.554687h24.5625c12.269531 0 22.25 9.980468 22.25 22.25v46.773437h-452v-46.773437c0-12.269532 9.980469-22.25 22.25-22.25zm407.5 407.472656h-407.5c-12.269531 0-22.25-9.980469-22.25-22.25v-286.199219h452v286.199219c0 12.269531-9.980469 22.25-22.25 22.25zm0 0"/><path fill="#999999" d="m402.628906 208.886719h-300.832031c-17.957031 0-32.5625 14.605469-32.5625 32.5625v167.253906c0 17.953125 14.605469 32.5625 32.5625 32.5625h300.832031c17.953125 0 32.5625-14.605469 32.5625-32.5625v-167.253906c-.003906-17.957031-14.609375-32.5625-32.5625-32.5625zm-219.242187 98.1875h54.152343v36h-54.152343zm-30 36h-54.152344v-36h54.152344zm84.152343-66h-54.152343v-38.1875h54.152343zm30-38.1875h53.496094v38.1875h-53.496094zm-30 134.1875v38.191406h-54.152343v-38.191406zm30 0h53.496094v38.191406h-53.496094zm0-30v-36h53.496094v36zm83.496094-36h54.152344v36h-54.152344zm54.152344-65.625v35.625h-54.152344v-38.1875h51.59375c1.410156 0 2.558594 1.148437 2.558594 2.5625zm-303.390625-2.5625h51.589844v38.1875h-54.152344v-35.625c0-1.414063 1.148437-2.5625 2.5625-2.5625zm-2.5625 169.816406v-35.628906h54.152344v38.191406h-51.59375c-1.410157 0-2.558594-1.152344-2.558594-2.5625zm303.394531 2.5625h-51.59375v-38.191406h54.152344v35.628906c0 1.410156-1.148438 2.5625-2.558594 2.5625zm0 0"/></svg>
        <p class="font-semibold ml-2 mr-4">{{ $route.query.fecha | toLocaleDate }}</p>
        <svg class="fill-gray-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"/></svg>
        <p class="font-semibold ml-2">{{ $route.query.hora }}</p>
      </div>
      <!-- FIN SECCIÓN CABECERA -->

      <div id="msgBox"></div>
      <div id="msg" v-if="message && message.show" class="max-w-3xl mx-auto border-t border-t-gray-200 md:px-6 md:pt-5 md:pb-5 mb-8 bg-yellow-200 md:shadow-sm">
        <div class="flex flex-col justify-center md:flex-row md:justify-between py-2">
          <div class="flex w-full flex-row items-center justify-between md:items-start">
            <p>{{ message.msg }}</p>
            <svg @click="closeMessage" class="fill-gray-700 w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z"/></svg>
          </div>
        </div>
      </div>
      
      <!-- SECCION JUGADORES-->
      <div v-if="bookingHour" class="max-w-3xl mx-auto border-t border-t-gray-200 md:px-6 md:pt-5 md:pb-6 mb-8 bg-white md:shadow-sm">
        <div v-for="(tarifa, index) in bookingHour.tarifas" :key="index"
          class="flex flex-col justify-center md:flex-row md:justify-between"
          :class="{
            'border-b border-b-slate-300 py-2 md:pt-0 md:pb-2 mb-2': index !== bookingHour.tarifas.length - 1,
            'py-2 md:pt-0 md:pb-0 mb-0': index === bookingHour.tarifas.length - 1,
          }"
        >
          <div class="flex w-full flex-col items-center justify-center md:w-1/3 md:flex-col md:items-start">
            <h3 class="text-base font-semibold truncate">
              {{ tarifa.nombre }}
            </h3>
            <p class="text-xs text-gray-500 text-center md:text-left">{{ tarifa.serviciosIncluidos.join(' / ') }}</p>
            <p class="text-xs text-red-700 text-center md:text-left">{{ tarifa.obsTarifa }}</p>
          </div> 
          <div class="flex w-full flex-row items-center justify-center md:w-1/3">
            <p class="font-bold text-teal-700 py-4">
              <span v-html="$options.filters.toCurrency(tarifa.precio, decimal)" />
            </p>
          </div> 
          <div class="flex w-full flex-row items-center justify-center pb-2 md:w-1/3 md:items-center md:justify-end">
            <img src="~/static/img/ico-golf-player.svg" class="w-6 h-6">
            <button
              v-for="(jugador, index) in tarifa.numJugadoresReservables"
              :key="index"
              class="flex items-center justify-center font-bold text-gray-400 border border-gray-200 rounded-full w-6 h-6 ml-1"
              :class="{ 'bg-amber-400': selectedRate(tarifa.idTarifa, jugador)}"
              @click="selectUnSelectPlayer(tarifa, jugador)">
              {{ jugador }}
            </button>
          </div> 
        </div>
      </div> 
      <!-- FIN SECCIÓN JUGADORES-->

      <!-- SECCION SERVICIOS-->
      <h2 v-if="serviciosDisponibles" class="text-lg md:text-xl font-extrabold text-center mb-5 md:mb-8" :class="{ 'text-gray-400': !teeTimesSeleccionados.length }">{{ $t('addExtraServices') }}</h2>

      <div
        v-if="serviciosDisponibles"
        class="max-w-3xl mx-auto border-t border-t-gray-200 md:px-6 md:pt-5 md:pb-6 mb-8 bg-white md:shadow-sm"
        :class="{ 'bg-gray-100': !teeTimesSeleccionados.length }">

        <div
          v-for="(servicio, index) in serviciosHora" :key="index"
          class="flex flex-col justify-center md:flex-row md:justify-between"
          :class="{
            'border-b border-b-slate-300 py-2 md:pt-0 md:pb-2 mb-2': index !== serviciosHora.length - 1,
            'py-2 md:pt-0 md:pb-0 mb-0': index === serviciosHora.length - 1,
          }"
        >
          <div class="flex w-full flex-col items-center justify-center md:w-1/3 md:flex-col md:items-start">
            <h3 class="text-base font-semibold truncate" :class="{ 'text-gray-400': !teeTimesSeleccionados.length }">
              {{ servicio.servicioNombre }}
            </h3> 
          </div> 
          <div class="flex w-full flex-row items-center justify-center md:w-1/3">
            <p class="font-bold py-4" :class="{ 'text-gray-400': !teeTimesSeleccionados.length, 'text-teal-700': teeTimesSeleccionados.length }">
              <span v-html="$options.filters.toCurrency(servicio.servicioPrecio, decimal)" />
            </p>
          </div> 
          <div class="flex w-full flex-row items-center justify-center md:w-1/3 md:items-center md:justify-end">
            <button
              v-for="(servicioNum, index) in servicio.numUnidadesReservables"
              :key="index"
              class="flex items-center justify-center font-bold text-gray-400 border border-gray-200 rounded-full w-6 h-6 ml-1"
              :class="{ 'bg-amber-400': selectedService(servicio.idServicio, servicioNum)}"
              @click="selectUnSelectService(servicio, servicioNum)">
                {{ servicioNum }}
              </button>
          </div> 
        </div>
      </div>
      <!-- FIN SECCIÓN SERVICIOS-->

      <div class="flex justify-center mb-6 md:m-0">
        <BaseButton label="CANCELAR" classType="default" class="mr-4" />
        <BaseButton label="RESERVAR" classType="primary" :disabled="!teeTimesSeleccionados" @click="doBooking" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'BookingPage',

  data() {
    return {
      serviciosDisponibles: false,
      serviciosHora: [],
      jugadoresAReservar: 0,
      serviciosAReservar: 0,
      teeTimesSeleccionados: [],
      serviciosSeleccionados: [],
      buggiesRequeridos: 0,
      jsonToCart: {},
      uuidReserva: null,
      newCart: {},
    }
  },

  watch: {
    teeTimesSeleccionados() {
      if (!this.teeTimesSeleccionados.length){
        this.serviciosSeleccionados = [];
        this.serviciosAReservar = 0;
      }
    },
  },

  computed: {
    ...mapState({
      culture: state => state.culture.culture,
      idVendedor: state => state.auth._vendorId,
      bookingHour: state => state.booking.bookingHour,
      decimal: state => state.culture.decimal,
      message: state => state.messages.message,
      cartLocator: state => state.cart.cartLocator,
      cartItems: state => state.cart.cartItems,
      cartJSON: state => state.cart.cartJSON,
    }),
  },

  async mounted() {
    if (!this.bookingHour && localStorage.getItem('selectedHour')) this.$store.commit('booking/setBookingHour', JSON.parse(localStorage.getItem('selectedHour')));
    if (this.cartLocator) await this.getCarrito();
    this.$nextTick(async () => { await this.getDisponibilidadServicios(); });
  },

  methods: {
    async getCarrito() {
      const payload = { localizador: this.cartLocator };

      try {
        const response = await this.$api.carritosreserva.getCarrito(payload);
        const cartParse = JSON.parse(response.datos.jsonCarrito);
        
        this.newCart = JSON.parse(response.datos.jsonCarrito);
        this.$store.dispatch('cart/setCart', cartParse);
      } catch (error) {
        console.log('getCarrito', error);
      }
    },

    async getDisponibilidadServicios() {
      const payload = {
        idVendedorProveedor: this.$route.query.idVP,
        idVendedorTourOperador: this.$route.query.idVTO,
        idRecorrido: this.$route.query.recorrido,
        fecha: this.$route.query.fecha,
        hora: this.$route.query.hora,
        numJugadores: -1
      };

      try {
        const response = await this.$api.disponibilidad.getDisponibilidadServiciosTeeTime(payload);
        this.serviciosDisponibles = response.datos.listaServiciosDisponibles.length;
        this.serviciosHora = response.datos.listaServiciosDisponibles;
      } catch (error) {
        console.log(error);
      }
    },

    selectUnSelectPlayer(tarifa, jugador) {
      const teeTimeSelected = {
        ...tarifa,
        jugadores: jugador,
      };

      if (this.selectedRate(teeTimeSelected.idTarifa, teeTimeSelected.jugadores)) {
        let indice = 0;
        this.teeTimesSeleccionados.forEach((teeTime, index) => {
          if (teeTime.idTarifa === teeTimeSelected.idTarifa && teeTime.jugadores === teeTimeSelected.jugadores) indice = index;
        });

        this.teeTimesSeleccionados.splice(indice, 1);
        this.jugadoresAReservar -= teeTimeSelected.jugadores;
      } else if (this.teeTimesSeleccionados.find(teeTime => teeTime.idTarifa === teeTimeSelected.idTarifa)) {
        let indice = 0;
        this.teeTimesSeleccionados.forEach((teeTime, index) => {
          if (teeTime.idTarifa === teeTimeSelected.idTarifa) indice = index;
        });

        // Deseleccionamos el número de jugadores marcados previamente para la misma tarifa
        this.teeTimesSeleccionados.splice(indice, 1);
        this.jugadoresAReservar -= teeTimeSelected.jugadores;

        // Añadimos el nuevo número de jugadores seleccionados para la tarifa
        this.teeTimesSeleccionados.push(teeTimeSelected);
        this.jugadoresAReservar += teeTimeSelected.jugadores;
      } else {
        this.teeTimesSeleccionados.push(teeTimeSelected);
        this.jugadoresAReservar += teeTimeSelected.jugadores;
      }
    },

    selectUnSelectService(servicio, cantidad) {
      if (!this.teeTimesSeleccionados.length) return;

      const serviceSelected = {
        ...servicio,
        cantidades: cantidad,
      };

      if (this.selectedService(serviceSelected.idServicio, serviceSelected.cantidades)) {
        let indice = 0;
        this.serviciosSeleccionados.forEach((serv, index) => {
          if (serv.idServicio === serviceSelected.idServicio && serv.cantidades === serviceSelected.cantidades) indice = index;
        });

        this.serviciosSeleccionados.splice(indice, 1);
        this.serviciosAReservar -= serviceSelected.cantidades;
      } else if (this.serviciosSeleccionados.find(servicio => servicio.idServicio === serviceSelected.idServicio)) {
        let indice = 0;
        this.serviciosSeleccionados.forEach((serv, index) => {
          if (serv.idServicio === serviceSelected.idServicio) indice = index;
        });

        // Deseleccionamos el número de servicios marcados
        this.serviciosSeleccionados.splice(indice, 1);
        this.serviciosAReservar -= serviceSelected.cantidades;

        // Añadimos el nuevo número de servicios seleccionados
        this.serviciosSeleccionados.push(serviceSelected);
        this.serviciosAReservar += serviceSelected.cantidades;
      } else {
        this.serviciosSeleccionados.push(serviceSelected);
        this.serviciosAReservar += serviceSelected.cantidades;
      }
    },

    selectedRate(idTarifa, jugadorSeleccionado) {
      return this.teeTimesSeleccionados.find(teeTime => teeTime.idTarifa === idTarifa && teeTime.jugadores === jugadorSeleccionado);
    },

    selectedService(idServicio, servicioSeleccionado) {
      return this.serviciosSeleccionados.find(servicio => servicio.idServicio === idServicio && servicio.cantidades === servicioSeleccionado);
    },

    async doBooking() {
      if (this.jugadoresAReservar <= 0) return;
      this.uuidReserva = this.cartLocator || uuidv4();
      this.buggiesRequeridos = this.serviciosSeleccionados.find(servicio => servicio.idServicio === 1) ? this.serviciosSeleccionados.find(servicio => servicio.idServicio === 1).cantidades : 0;

      if (this.jugadoresAReservar > this.bookingHour.jugadoresDisponibles) {
        const body = {
          show: true,
          msg: 'No se puede realizar la reserva, el número de jugadores seleccionados es mayor al número de jugadores disponibles',
          class: 'warning'
        };

        this.$store.commit('messages/setMessage', body);
        document.getElementById('msgBox').scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
      else {
        let continuar = true;

        if (this.buggiesRequeridos > 0) continuar = await this.checkBuggies();
        if (continuar) {
          await this.comprobarTarifaNeta();
          await this.saveCart();
        }
      }
    },

    async checkBuggies() {
      const payload = {
        idVendedorProveedor: this.$route.query.idVP,
        idVendedorTourOperador: this.$route.query.idVTO,
        fecha: this.$route.query.fecha,
        idRecorrido: this.bookingHour.idRecorrido,
        hora: this.bookingHour.hora,
        numBuggiesRequeridos: this.buggiesRequeridos,
      };

      try {
        const response = await this.$api.disponibilidad.getHaySuficientesBuggies(payload);
        if (!response.hayDisponibilidad) {
          const body = {
            show: true,
            msg: 'Sorry, but it\'s not enought buggies in stock for this teetime',
            class: 'warning'
          };

          this.$store.commit('messages/setMessage', body);
          document.getElementById('msgBox').scrollIntoView({ block: 'center', behavior: 'smooth' });
          return false;
        }

        return true;
      } catch (error) {
        console.log('Error', error);
      }
    },

    // Método para registrar log en BBDD De cara al front no hace nada
    async comprobarTarifaNeta() {
      const listaTarifas = this.teeTimesSeleccionados.map(teeTime => ({ idTarifa: teeTime.idTarifa, idTarifaHorario: teeTime.idTarifaHorario, idTipoTarifa: teeTime.idTarifaTipo }))
      const payload = {
        listaTarifas,
        idVendedorProveedor: Number(this.$route.query.idVP),
        idVendedorTourOperador: Number(this.$route.query.idVTO),
        fecha: this.$route.query.fecha,
        idRecorrido: this.bookingHour.idRecorrido,
        hora: this.bookingHour.hora,
      };

      await this.$api.disponibilidad.getComprobacionTarifaNeta(payload);
    },

    async saveCart() {
      const payload = {
        localizador: this.cartLocator || this.uuidReserva,
        jsonCarrito: this.jsonToCartPayload(),
      };

      try {
        await this.$api.carritosreserva.saveCarrito(payload);
        if (!this.cartLocator) {
          document.cookie = `cartLocator=${payload.localizador};path=/`;
          this.$store.commit('cart/setCartLocator', this.cartLocator || this.uuidReserva);
        }
      } catch (error) {
        console.log('Error', error);
      } finally {
        this.$router.push({ path: `/${this.$i18n.locale}/cart`, query: { desc: this.$route.query.desc }});
      }
    },
    
    jsonToCartPayload() {
      let jsonCart = {};

      const teeTimesSeleccionadosComp = this.teeTimesSeleccionados.map(tt => ({
        idtarifa: tt.idTarifa,
        idtarifahorario: tt.idTarifaHorario,
        idtarifatipo:tt.idTarifaTipo,
        promocodeid: tt.promoCodeId,
        iddescyielddisp: tt.idDescuentoYieldDisponibilidad,
        nombretarifa: tt.nombre,
        obstarifa: tt.obsTarifa,
        precio: tt.precio,
        preciorack: tt.precioRack,
        precioneto: tt.precioNeto,
        aceptabarter: tt.aceptaBarter,
        servicios: tt.serviciosIncluidos.toString(),
        jugadores: tt.jugadores,
        idofertagratuidad: -1, //
        idofertadescuento: -1, //
        aplicaoferta: false, //
        precioconoferta: tt.precio
      }));
  
      const serviciosSeleccionadosComp = this.serviciosSeleccionados.map(serv => ({
        idServicioPrecio: serv.idServicioPrecio,
        idServicio: serv.idServicio,
        servicionombre: serv.servicioNombre,
        precio: serv.servicioPrecio,
        unidades: serv.cantidades
      }));

      if (this.cartLocator) {
        const existProvider = !!this.newCart.listaClubesRecorridos.find(rec => rec.idVendedorProveedor === Number(this.$route.query.idVP));
        if (existProvider) {
          const existDateHour = !!this.newCart.listaClubesRecorridos
            .find(rec => rec.idVendedorProveedor === Number(this.$route.query.idVP))
              .listaTeeTimes
              .find(tt => tt.fecha === this.$route.query.fecha.replaceAll('-', '/') && tt.hora === this.$route.query.hora);
          
          if (existDateHour) {
            teeTimesSeleccionadosComp.forEach(teeTime => {
              this.newCart.listaClubesRecorridos
                .find(rec => rec.idVendedorProveedor === Number(this.$route.query.idVP))
                  .listaTeeTimes
                  .find(tt => tt.fecha === this.$route.query.fecha.replaceAll('-', '/') && tt.hora === this.$route.query.hora)
                    .tarifasSeleccionadas
                    .push(teeTime);
            });

            serviciosSeleccionadosComp.forEach(servicio => {
              this.newCart.listaClubesRecorridos
                .find(rec => rec.idVendedorProveedor === Number(this.$route.query.idVP))
                  .listaTeeTimes
                  .find(tt => tt.fecha === this.$route.query.fecha.replaceAll('-', '/') && tt.hora === this.$route.query.hora)
                    .serviciosSeleccionados
                    .push(servicio);
            });
          } else {
            this.newCart.listaClubesRecorridos.find(rec => rec.idVendedorProveedor === Number(this.$route.query.idVP))
              .listaTeeTimes
              .push(
                {
                  idTeeTime: uuidv4(),
                  fecha: this.$route.query.fecha.replaceAll('-', '/'),
                  hora: this.$route.query.hora,
                  timeReference: '', //
                  jugadoresDisponibles: this.bookingHour.jugadoresDisponibles,
                  tarifasSeleccionadas: teeTimesSeleccionadosComp,
                  serviciosSeleccionados: serviciosSeleccionadosComp,
                }
              );
          }
        } else {
          console.log(this.newCart);
          this.newCart.listaClubesRecorridos
            .push(
              {
                idVendedorProveedor: Number(this.$route.query.idVP),
                nombreVendedorProveedor: this.$route.query.nombreVP,
                idVendedorTourOperador: Number(this.$route.query.idVTO),
                idRecorrido: this.$route.query.recorrido,
                nombreRecorrido: this.$route.query.nombreRec,
                fee: 0,
                numGFBarter: 0,
                usuarioPagaTotal: true,
                listaTeeTimes: [
                  {
                    idTeeTime: uuidv4(),
                    fecha: this.$route.query.fecha.replaceAll('-', '/'),
                    hora: this.$route.query.hora,
                    timeReference: '', //
                    jugadoresDisponibles: this.bookingHour.jugadoresDisponibles,
                    tarifasSeleccionadas: teeTimesSeleccionadosComp,
                    serviciosSeleccionados: serviciosSeleccionadosComp,
                  }
                ],
                listaOfertasGratuidadAplicadas: [], //
                listaOfertasDescuentoAplicadas: [], //
              }
            );
        }

        jsonCart = this.newCart;
      } else {
        jsonCart = {
          idReserva: this.uuidReserva,
          culture: this.culture,
          idVendedor: Number(this.idVendedor),
          listaClubesRecorridos: [
            {
              idVendedorProveedor: Number(this.$route.query.idVP),
              nombreVendedorProveedor: this.$route.query.nombreVP,
              idVendedorTourOperador: Number(this.$route.query.idVTO),
              idRecorrido: this.$route.query.recorrido,
              nombreRecorrido: this.$route.query.nombreRec,
              fee: 0,
              numGFBarter: 0,
              usuarioPagaTotal: true,
              listaTeeTimes: [
                {
                  idTeeTime: uuidv4(),
                  fecha: this.$route.query.fecha.replaceAll('-', '/'),
                  hora: this.$route.query.hora,
                  timeReference: '', //
                  jugadoresDisponibles: this.bookingHour.jugadoresDisponibles,
                  tarifasSeleccionadas: teeTimesSeleccionadosComp,
                  serviciosSeleccionados: serviciosSeleccionadosComp,
                }
              ],
              listaOfertasGratuidadAplicadas: [], //
              listaOfertasDescuentoAplicadas: [], //
            }
          ]
        };
      }

      return JSON.stringify(jsonCart);
    },

    closeMessage() {
      this.$store.commit('messages/setMessage', { show: false, msg: null, class: null });
    },
  },

  destroyed() {
    this.$store.commit('booking/setBookingHour', null);
    this.$store.commit('messages/setMessage', { show: false, msg: null, class: null });
  }

}
</script>