<template>
  <section class="flex-auto md:bg-slate-200">
    <div v-if="hasCart" class="container mx-auto py-5 px-4 md:py-10">
      <h2 class="text-xl font-extrabold text-center mb-5 md:mb-8">{{ $t('purchaseSummary') }}</h2>
      <form>
        <!-- Primera caja: una por cada día/hora => confirmar -->
        <div class="max-w-3xl mx-auto bg-white md:mb-6 md:shadow-sm" v-for="(club, index) in cartJSON.listaClubesRecorridos" :key="index">
          <div class="flex w-full flex-row items-center justify-between p-2 border-b border-b-slate-300 bg-teal-100">
            <div class="flex flex-col">
              <h3 class="font-xl font-semibold">{{ club.nombreVendedorProveedor }}</h3>
              <p class="font-sm">{{ club.nombreRecorrido }}</p>
            </div>
            <!-- <div class="flex items-center justify-end">
              <svg class="fill-gray-400 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m459.75 44.527344h-24.5625v-29.527344c0-8.285156-6.714844-15-15-15-8.28125 0-15 6.714844-15 15v29.527344h-54.152344v-29.527344c0-8.285156-6.714844-15-15-15-8.28125 0-15 6.714844-15 15v29.527344h-53.496094v-29.527344c0-8.285156-6.714843-15-15-15-8.28125 0-15 6.714844-15 15v29.527344h-54.152343v-29.527344c0-8.285156-6.714844-15-15-15-8.28125 0-15 6.714844-15 15v29.527344h-54.152344v-29.527344c0-8.285156-6.714844-15-15-15s-15 6.714844-15 15v29.527344h-16.984375c-28.8125 0-52.25 23.4375-52.25 52.25v362.972656c0 28.8125 23.4375 52.25 52.25 52.25h407.5c28.8125 0 52.25-23.4375 52.25-52.25v-362.972656c0-28.8125-23.4375-52.25-52.25-52.25zm-407.5 30h16.984375v20.554687c0 8.28125 6.714844 15 15 15s15-6.71875 15-15v-20.554687h54.152344v20.554687c0 8.28125 6.714843 15 15 15 8.285156 0 15-6.71875 15-15v-20.554687h54.152343v20.554687c0 8.28125 6.71875 15 15 15 8.285157 0 15-6.71875 15-15v-20.554687h53.496094v20.554687c0 8.28125 6.714844 15 15 15s15-6.71875 15-15v-20.554687h54.152344v20.554687c0 8.28125 6.714844 15 15 15s15-6.71875 15-15v-20.554687h24.5625c12.269531 0 22.25 9.980468 22.25 22.25v46.773437h-452v-46.773437c0-12.269532 9.980469-22.25 22.25-22.25zm407.5 407.472656h-407.5c-12.269531 0-22.25-9.980469-22.25-22.25v-286.199219h452v286.199219c0 12.269531-9.980469 22.25-22.25 22.25zm0 0"/><path fill="#999999" d="m402.628906 208.886719h-300.832031c-17.957031 0-32.5625 14.605469-32.5625 32.5625v167.253906c0 17.953125 14.605469 32.5625 32.5625 32.5625h300.832031c17.953125 0 32.5625-14.605469 32.5625-32.5625v-167.253906c-.003906-17.957031-14.609375-32.5625-32.5625-32.5625zm-219.242187 98.1875h54.152343v36h-54.152343zm-30 36h-54.152344v-36h54.152344zm84.152343-66h-54.152343v-38.1875h54.152343zm30-38.1875h53.496094v38.1875h-53.496094zm-30 134.1875v38.191406h-54.152343v-38.191406zm30 0h53.496094v38.191406h-53.496094zm0-30v-36h53.496094v36zm83.496094-36h54.152344v36h-54.152344zm54.152344-65.625v35.625h-54.152344v-38.1875h51.59375c1.410156 0 2.558594 1.148437 2.558594 2.5625zm-303.390625-2.5625h51.589844v38.1875h-54.152344v-35.625c0-1.414063 1.148437-2.5625 2.5625-2.5625zm-2.5625 169.816406v-35.628906h54.152344v38.191406h-51.59375c-1.410157 0-2.558594-1.152344-2.558594-2.5625zm303.394531 2.5625h-51.59375v-38.191406h54.152344v35.628906c0 1.410156-1.148438 2.5625-2.558594 2.5625zm0 0"/></svg>
              <p class="text-sm font-semibold ml-1 mr-3">04/11/2022</p>
              <svg class="fill-gray-400 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"/></svg>
              <p class="text-sm font-semibold ml-1">08:00</p>
            </div> -->
          </div>

          <div v-for="(teeTime, indexTeeTime) in club.listaTeeTimes" :key="`tt-${indexTeeTime}`">
            <div class="flex w-full flex-row items-center justify-between p-2 border-b border-b-slate-300">
              <div class="flex items-center justify-end">
                <svg class="fill-gray-400 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m459.75 44.527344h-24.5625v-29.527344c0-8.285156-6.714844-15-15-15-8.28125 0-15 6.714844-15 15v29.527344h-54.152344v-29.527344c0-8.285156-6.714844-15-15-15-8.28125 0-15 6.714844-15 15v29.527344h-53.496094v-29.527344c0-8.285156-6.714843-15-15-15-8.28125 0-15 6.714844-15 15v29.527344h-54.152343v-29.527344c0-8.285156-6.714844-15-15-15-8.28125 0-15 6.714844-15 15v29.527344h-54.152344v-29.527344c0-8.285156-6.714844-15-15-15s-15 6.714844-15 15v29.527344h-16.984375c-28.8125 0-52.25 23.4375-52.25 52.25v362.972656c0 28.8125 23.4375 52.25 52.25 52.25h407.5c28.8125 0 52.25-23.4375 52.25-52.25v-362.972656c0-28.8125-23.4375-52.25-52.25-52.25zm-407.5 30h16.984375v20.554687c0 8.28125 6.714844 15 15 15s15-6.71875 15-15v-20.554687h54.152344v20.554687c0 8.28125 6.714843 15 15 15 8.285156 0 15-6.71875 15-15v-20.554687h54.152343v20.554687c0 8.28125 6.71875 15 15 15 8.285157 0 15-6.71875 15-15v-20.554687h53.496094v20.554687c0 8.28125 6.714844 15 15 15s15-6.71875 15-15v-20.554687h54.152344v20.554687c0 8.28125 6.714844 15 15 15s15-6.71875 15-15v-20.554687h24.5625c12.269531 0 22.25 9.980468 22.25 22.25v46.773437h-452v-46.773437c0-12.269532 9.980469-22.25 22.25-22.25zm407.5 407.472656h-407.5c-12.269531 0-22.25-9.980469-22.25-22.25v-286.199219h452v286.199219c0 12.269531-9.980469 22.25-22.25 22.25zm0 0"/><path fill="#999999" d="m402.628906 208.886719h-300.832031c-17.957031 0-32.5625 14.605469-32.5625 32.5625v167.253906c0 17.953125 14.605469 32.5625 32.5625 32.5625h300.832031c17.953125 0 32.5625-14.605469 32.5625-32.5625v-167.253906c-.003906-17.957031-14.609375-32.5625-32.5625-32.5625zm-219.242187 98.1875h54.152343v36h-54.152343zm-30 36h-54.152344v-36h54.152344zm84.152343-66h-54.152343v-38.1875h54.152343zm30-38.1875h53.496094v38.1875h-53.496094zm-30 134.1875v38.191406h-54.152343v-38.191406zm30 0h53.496094v38.191406h-53.496094zm0-30v-36h53.496094v36zm83.496094-36h54.152344v36h-54.152344zm54.152344-65.625v35.625h-54.152344v-38.1875h51.59375c1.410156 0 2.558594 1.148437 2.558594 2.5625zm-303.390625-2.5625h51.589844v38.1875h-54.152344v-35.625c0-1.414063 1.148437-2.5625 2.5625-2.5625zm-2.5625 169.816406v-35.628906h54.152344v38.191406h-51.59375c-1.410157 0-2.558594-1.152344-2.558594-2.5625zm303.394531 2.5625h-51.59375v-38.191406h54.152344v35.628906c0 1.410156-1.148438 2.5625-2.558594 2.5625zm0 0"/></svg>
                <p class="text-sm font-semibold ml-1 mr-3">{{ teeTime.fecha | toLocaleDate }}</p>
                <svg class="fill-gray-400 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z"/></svg>
                <p class="text-sm font-semibold ml-1">{{ teeTime.hora }}</p>
              </div>
            </div>
            <!-- TARIFAS -->
            <div class="flex border-b border-b-slate-300 p-2 py-3" v-for="(tee, indexTee) in teeTime.tarifasSeleccionadas" :key="`tee-${indexTee}`">
              <div class="flex w-2/3 flex-col items-start">
                <h3 class="text-base font-semibold truncate">
                  {{ tee.nombretarifa }}
                </h3>
                <p class="text-xs text-gray-500 text-left">{{ tee.servicios }}</p>
                <p class="text-xs text-red-700 text-left">{{ tee.obstarifa }}</p>
              </div>
              <div class="flex items-center justify-end w-1/3">
                <p class="font-semibold">
                  <span v-html="$options.filters.toCurrency(tee.precio, decimal)" />
                </p>
              </div>
            </div>
            <!-- SERVICIOS -->
            <div class="flex border-b border-b-slate-300 p-2 py-3" v-for="(serv, indexServ) in teeTime.serviciosSeleccionados" :key="`serv-${indexServ}`">
              <div class="flex w-2/3 flex-col items-start">
                <h3 class="text-base font-semibold truncate">
                  {{ serv.servicionombre }} ({{ serv.unidades }})
                </h3>
              </div>
              <div class="flex items-center justify-end w-1/3">
                <p class="font-semibold">
                  <span v-html="$options.filters.toCurrency(serv.precio, decimal)" />
                </p>
              </div>
            </div>
            <div class="flex bg-slate-100 border-b border-b-slate-300 p-2 py-3">
              <div class="flex w-1/3 items-center justify-start">
                <BaseButton
                  :id="`tt-${indexTeeTime}`"
                  :label="$t('removeBooking')"
                  classType="default"
                  class="font-semibold"
                  :small="true"
                  @click="deleteItem(index, indexTeeTime)"
                />
              </div>
              <div class="flex w-2/3 items-center justify-end">
                <p class="font-semibold">
                  {{ $t('subtotal') }}
                </p>
                <p class="font-semibold text-right min-w-[90px]">
                  <span v-html="$options.filters.toCurrency(preciosComp[indexTeeTime], decimal)" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Segunda caja: subtotal -->
        <div class="max-w-3xl mx-auto bg-slate-100 md:mb-6 md:shadow-sm">
          <div class="flex w-full items-center justify-end border-b border-b-slate-300 p-2 py-3">
            <p class="font-semibold">
              {{ $t('transactionFee') }}
            </p>
            <p class="font-semibold text-right min-w-[90px]">
              <span v-html="'0,00€'" />
            </p>
          </div>
        </div>
        <!-- Tercera caja: totales -->
        <div class="max-w-3xl mx-auto bg-slate-100 mb-6 md:shadow-sm">
          <div class="flex w-full items-center justify-end bg-yellow-50 border-b border-b-slate-300 p-2 py-3">
            <p class="font-semibold">
              {{ $t('Total') }}
            </p>
            <p class="font-semibold text-right min-w-[90px]">
              <span v-html="$options.filters.toCurrency(totalBooking, decimal)" />
            </p>
          </div>
        </div>
        <!-- CheckBox - Terms and Conditions -->
        <div class="flex justify-center items-center mb-6 font-semibold text-sm">
          <base-checkbox
            v-model='haveReadConditions'
            label='I accept the' 
          />
          <BaseLink 
            color="text-amber-500" 
            colorHover="hover:text-black" 
            :link="linkTerminosCondiciones"
          />
        </div>
        <!-- Botonera -->
        <div class="flex justify-center mb-6 md:m-0">
          <BaseButton classType="default" :label="$t('keepBuying')" class="mr-4" />
          <BaseButton :label="$t('Continuar')" :disabled="!haveReadConditions" @click="handlePay" />
        </div>
      </form>
    </div>
    <div v-else class="container mx-auto py-5 px-4 md:py-10">
      <div class="bg-teal-100 p-6 text-center shadow-sm">
        <p>{{ $t('NoReservasDisponibles') }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Cart',

  data() {
    return {
      newCart: {},
      haveReadConditions: false,
      linkTerminosCondiciones: {
        path: '/terms-and-conditions',
        label: 'termsAndConditions'
      }
    };
  },

  computed: {
    ...mapState({
      cartLocator: state => state.cart.cartLocator,
      cartItems: state => state.cart.cartItems,
      cartJSON: state => state.cart.cartJSON,
      decimal: state => state.culture.decimal,
      isUserLoggedIn: state => state.auth._isUserLoggedIn,
    }),

    hasCart() {
      return this.cartItems > 0;
    },

    preciosComp() {
      if (!this.newCart.listaClubesRecorridos) return [];
      const prComp = [];

      this.newCart.listaClubesRecorridos.forEach((cr, index) => {
        if (!cr.listaTeeTimes.length) return;
        cr.listaTeeTimes.forEach((tt, idx) => {
          let prTarifas = 0;
          let prServicios = 0;
          
          if (tt.tarifasSeleccionadas.length > 1) prTarifas = tt.tarifasSeleccionadas.reduce((a, b) => a.precio + b.precio);
          else if (tt.tarifasSeleccionadas.length === 1) prTarifas = tt.tarifasSeleccionadas[0].precio;
          else prTarifas = 0;
          
          if (tt.serviciosSeleccionados.length > 1) prServicios = tt.serviciosSeleccionados.reduce((a, b) => a.precio + b.precio);
          else if (tt.serviciosSeleccionados.length === 1) prServicios = tt.serviciosSeleccionados[0].precio;
          else prServicios = 0;

          prComp.push(prTarifas + prServicios);
        });
      });

      return prComp;
    },

    totalBooking() {
      if (!this.preciosComp.length) return 0;
      return this.preciosComp.reduce((a, b) => a + b);
    }
  },

  mounted() {
    this.getCarrito();
  },

  methods: {
    async getCarrito() {
      const payload = { localizador: this.cartLocator };

      try {
        const response = await this.$api.carritosreserva.getCarrito(payload);
        const cartParse = JSON.parse(response.datos.jsonCarrito);
        this.newCart = JSON.parse(response.datos.jsonCarrito);

        let hasItems = false;

        if (cartParse.listaClubesRecorridos) {
          cartParse.listaClubesRecorridos.forEach(rec => {
            if (rec.listaTeeTimes.length) hasItems = true;
          });

          if (hasItems) {
            this.$store.dispatch('cart/setCart', cartParse);
          } else {
            this.$store.commit('cart/setCartLocator', null);
            if (document.cookie.includes('cartLocator')) document.cookie = `cartLocator=''; path=/; expires=${new Date(0).toUTCString()};`;
            this.$store.dispatch('cart/setCart', null);
          }
        }

      } catch (error) {
        console.log('getCarrito', error);
      }
    },

    async saveCart(newJSON) {
      const payload = {
        localizador: this.cartLocator,
        jsonCarrito: newJSON,
      };

      try {
        await this.$api.carritosreserva.saveCarrito(payload);
        if (document.cookie.includes('cartLocator')) document.cookie = `cartLocator=''; path=/; expires=${new Date(0).toUTCString()};`;
        document.cookie = `cartLocator=${payload.localizador};path=/`;
        this.$store.commit('cart/setCartLocator', this.cartLocator);
      } catch (error) {
        console.log('Error', error);
      } finally {
        await this.getCarrito();
      }
    },

    async deleteItem(indexClub = 0, indexTeeTime = null) {
      this.newCart.listaClubesRecorridos[indexClub].listaTeeTimes.splice(indexTeeTime, 1);

      await this.saveCart(JSON.stringify(this.newCart));
    },

    handleHaveReadConditions() {
      this.haveReadConditions = !this.haveReadConditions;
    },

    handlePay() {
      if (this.isUserLoggedIn) this.$router.push({ path: `/${this.$i18n.locale}` })
      else this.$router.push({ path: `/${this.$i18n.locale}/checkout-as-member-or-guest`});
    },
  }
};
</script>