import getParamsForRequest from "@/api/getParamsForRequest";

/** Objeto de llamadas API para la sección 'Boletín'
 * @param {Object} $axios Opciones de la librería Axios
 * @param {Object} store Store de la aplicación (Vuex)
 */
export default ($axios, $config, store) => ({
  /** Suscribirse al boletín
   * @param {Object} body Payload (Parámetros API)
   */
  async suscribirse(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Boletin/Suscribirse', params);
  },

  /** Comprobar suscripción
   * @param {Object} body Payload (Parámetros API)
   */
   async comprobarSuscripcion(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Boletin/ComprobarSuscripcion', params);
  },
});