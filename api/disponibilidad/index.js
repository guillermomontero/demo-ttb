import getParamsForRequest from "@/api/getParamsForRequest";

/** Objeto de llamadas API para la sección 'Regiones'
 * @param {Object} $axios Opciones de la librería Axios
 * @param {Object} store Store de la aplicación (Vuex)
 */
export default ($axios, $config, store) => ({
  /** Obtener horas disponibles día para un club y recorrido en concreto
   * @param {Object} body Payload (Parámetros API)
   */
   async getDisponibilidadDia(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Disponibilidad/ObtenerDisponibilidadDia', params);
  },

  /** Obtener disponibilidad horas días cercanos
   * @param {Object} body Payload (Parámetros API)
   */
   async getDisponibilidadCercanasDia(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Disponibilidad/ObtenerDisponibilidadCercanasDia', params);
  },

  /** Comprobar si hay suficientes buggies
   * @param {Object} body Payload (Parámetros API)
   */
   async getHaySuficientesBuggies(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Disponibilidad/HaySuficientesBuggies', params);
  },

  /** Comprobación de la tarifa neta
   * @param {Object} body Payload (Parámetros API)
   */
   async getComprobacionTarifaNeta(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Disponibilidad/ComprobacionTarifaNeta', params);
  },

  /** Obtener disponibilidad servicios para hora concreta
   * @param {Object} body Payload (Parámetros API)
   */
   async getDisponibilidadServiciosTeeTime(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Disponibilidad/ObtenerDisponibilidadServiciosTeeTime', params);
  },

  /** Obtener disponibilidad servicios para hora concreta
   * @param {Object} body Payload (Parámetros API)
   */
   async getObtenerNuevoLocalizador(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Disponibilidad/ObtenerNuevoLocalizador', params);
  },

  /** Obtener disponibilidad servicios para hora concreta
   * @param {Object} body Payload (Parámetros API)
   */
   async getObtenerDisponibilidadProveedorRecorridoDia(body) {
    const params = getParamsForRequest($config, body, store);
    return await $axios.$post('/Disponibilidad/ObtenerDisponibilidadProveedorRecorridoDia', params);
  },
  
})