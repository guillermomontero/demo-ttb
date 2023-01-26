import getParamsForRequest from "@/api/getParamsForRequest";

/** Objeto de llamadas API para la sección 'Precancelacion'
 * @param {Object} $axios Opciones de la librería Axios
 * @param {Object} store Store de la aplicación (Vuex)
 */
export default ($axios, $config, store) => ({
  /** Realizar pre cancelación web
   * @param {Object} body Payload (Parámetros API)
   */
  async getTipoCancelacion(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/PreCancelacion/ObtenerTipoCancelacion', params);
  },
  async realizarPreCancelacionWeb(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/PreCancelacion/RealizarPreCancelacionWeb', params);
  },
});