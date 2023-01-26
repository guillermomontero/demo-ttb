import getParamsForRequest from "@/api/getParamsForRequest";

/** Objeto de llamadas API para la sección 'PreReserva'
 * @param {Object} $axios Opciones de la librería Axios
 * @param {Object} store Store de la aplicación (Vuex)
 */
export default ($axios, $config, store) => ({
  /** Realizar pre reserva
   * @param {Object} body Payload (Parámetros API)
   */
  async realizarPrereserva(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/PreReserva/RealizarPreReserva', params);
  },

  /** Modificar guardar tarjeta
   * @param {Object} body Payload (Parámetros API)
   */
  async modificarGuardarTarjeta(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/PreReserva/ModificarSalvarTarjeta', params);
  },

  /** Obtener los datos de la pasarela de la pre reserva
   * @param {Object} body Payload (Parámetros API)
   */
  async getDatosPasarelaPrereserva(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/PreReserva/ObtenerDatosPasarelaPreReserva', params);
  },
});