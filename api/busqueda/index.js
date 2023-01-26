import getParamsForRequest from "@/api/getParamsForRequest";

/** Objeto de llamadas API para la sección 'Búsqueda'
 * @param {Object} $axios Opciones de la librería Axios
 * @param {Object} store Store de la aplicación (Vuex)
 */
export default ($axios, $config, store) => ({
  /** Listar sugerencias
   * @param {Object} body Payload (Parámetros API)
   */
  async getListarSugerencias(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Portal/Busqueda/ListarSugerencias', params);
  },

  /** Listar resultados
   * @param {Object} body Payload (Parámetros API)
   */
   async getListarResultados(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Portal/Busqueda/ListarResultados', params);
  },
});