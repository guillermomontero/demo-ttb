import getParamsForRequest from "@/api/getParamsForRequest";

/** Objeto de llamadas API para la sección 'Datos club'
 * @param {Object} $axios Opciones de la librería Axios
 * @param {Object} store Store de la aplicación (Vuex)
 */
export default ($axios, $config, store) => ({
  /** Obtener recorridos de un club
   * @param {Object} body Payload (Parámetros API)
   */
  async getRecorridos(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/DatosClub/ObtenerRecorridos', params);
  },
});