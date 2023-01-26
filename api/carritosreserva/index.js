import getParamsForRequest from "@/api/getParamsForRequest";

/** Objeto de llamadas API para la sección 'Regiones'
 * @param {Object} $axios Opciones de la librería Axios
 * @param {Object} store Store de la aplicación (Vuex)
 */
export default ($axios, $config, store) => ({
  /** Obtener carrito
   * @param {Object} body Payload (Parámetros API)
   */
  async getCarrito(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Carrito/ObtenerCarrito', params);
  },

  /** Guardar carrito
   * @param {Object} body Payload (Parámetros API)
   */
   async saveCarrito(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Carrito/GuardarCarrito', params);
  },

  /** Eliminar carrito
   * @param {Object} body Payload (Parámetros API)
   */
   async deleteCarrito(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Carrito/EliminarCarrito', params);
  },
});
