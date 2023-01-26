import getParamsForRequest from "@/api/getParamsForRequest";

/** Objeto de llamadas API para la sección 'Vendedores'
 * @param {Object} $axios Opciones de la librería Axios
 * @param {Object} store Store de la aplicación (Vuex)
 */
export default ($axios, $config, store) => ({
  /** Obtener recorrido vendedor
   * @param {Object} body Payload (Parámetros API)
   */
  async getRecorridosVendedor(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Vendedor/ObtenerRecorridosVendedor', params);
  },

  async getMensajesTablon(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Vendedor/ObtenerMensajesTablon', params);
  },

  async getMensajesTablonOfertas(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Vendedor/ObtenerMensajesTablonOfertas', params);
  },

  async getProveedores(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Vendedor/ObtenerProveedores', params);
  },

  async getIdiomas(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Vendedor/ObtenerIdiomas', params);
  },

  async getProveedoresYRecorridos(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Vendedor/ObtenerProveedoresYRecorridos', params);
  },

  async getDatosClubTTB(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Vendedor/ObtenerDatosClubTTB', params);
  },
});