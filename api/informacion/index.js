import getParamsForRequest from "@/api/getParamsForRequest";

/** Objeto de llamadas API para la sección 'Vendedores'
 * @param {Object} $axios Opciones de la librería Axios
 * @param {Object} store Store de la aplicación (Vuex)
 */
export default ($axios, $config, store) => ({
  /** Obtener recorrido vendedor
   * @param {Object} body Payload (Parámetros API)
   */
  async getRegiones(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Vendedor/ObtenerRecorridosVendedor', params);
  },
});