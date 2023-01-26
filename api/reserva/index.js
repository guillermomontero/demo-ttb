import getParamsForRequest from "@/api/getParamsForRequest";

/** Objeto de llamadas API para la sección 'Vendedores'
 * @param {Object} $axios Opciones de la librería Axios
 * @param {Object} store Store de la aplicación (Vuex)
 */
export default ($axios, $config, store) => ({
  /** Obtener recorrido vendedor
   * @param {Object} body Payload (Parámetros API)
   */
  async realizarReserva(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/RealizarReserva', params);
  },

  async revocarReserva(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/RevocarReserva', params);
  },

  async obtenerVoucher(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/ObtenerVoucher', params);
  },

  async obtenerReservaDetalles(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/ObtenerReservaDetalles', params);
  },

  async obtenerReservaDetallesGoogleAnalytics(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/ObtenerReservaDetallesGoogleAnalytics', params);
  },

  async obtenerReservaDetallesPago(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/ObtenerReservaDetallesPago', params);
  },

  async estaReservaOK(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/EstaReservaOK', params);
  },

  async obtenerIFrameREserva(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/ObtenerIFrameREserva', params);
  },

  async obtenerDatosStripe(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/ObtenerDatosStripe', params);
  },

  async obtenerDatosStripePSD2(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/ObtenerDatosStripePSD2', params);
  },

  async obtenerDatosBraintree(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/ObtenerDatosBraintree', params);
  },

  async obtenerDatosPayCometJET(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/ObtenerDatosPayCometJET', params);
  },

  async obtenerDatosPasarelaRedsysGreenFees(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/ObtenerDatosPasarelaRedsysGreenFees', params);
  },

  async comprobarTrasferFee(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/ComprobarTrasferFee', params);
  },

  async guardarTarjetaDePago(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/GuardarTarjetaDePago', params);
  },

  async guardarEstadoDevolucion(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/GuardarEstadoDevolucion', params);
  },

  async guardarEstadoTransferSplit(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/GuardarEstadoTransferSplit', params);
  },

  async generarEmailsVoucher(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/GenerarEmailsVoucher', params);
  },

  async obtenerEstadoReservaYPago(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Reserva/ObtenerEstadoReservaYPago', params);
  },
});