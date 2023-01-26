import getParamsForRequest from "@/api/getParamsForRequest";

/** Objeto de llamadas API para la sección 'Cancelación'
 * @param {Object} $axios Opciones de la librería Axios
 * @param {Object} store Store de la aplicación (Vuex)
 */
export default ($axios, $config, store) => ({
  /** Realizar cancelación
   * @param {Object} body Payload (Parámetros API)
   */
  async doRealizarCancelacion(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Cancelacion/RealizarCancelacion', params);
  },
});