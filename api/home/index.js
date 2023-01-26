import getParamsForRequest from "@/api/getParamsForRequest";

/** Objeto de llamadas API para la sección 'Home'
 * @param {Object} $axios Opciones de la librería Axios
 * @param {Object} store Store de la aplicación (Vuex)
 */
export default ($axios, $config, store) => ({
  /** Listar cajitas home
   * @param {Object} body Payload (Parámetros API)
   */
  async getListarCajitas(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Portal/Home/ListarCajitas', params);
  },
});