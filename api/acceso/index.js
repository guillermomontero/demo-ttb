import getParamsForRequest from "@/api/getParamsForRequest";

/** Objeto de llamadas API para la sección 'Acceso'
 * @param {Object} $axios Opciones de la librería Axios
 * @param {Object} store Store de la aplicación (Vuex)
 */
export default ($axios, $config, store) => ({
  /** Iniciar sesión en el front
   * @param {Object} body Payload (Parámetros API)
   */
  async iniciarSesion(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Acceso/IniciarSesionFront', params);
  },
});
