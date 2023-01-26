import getParamsForRequest from "@/api/getParamsForRequest";

export default ($axios, $config, store) => ({
  async crearUsuario(body) {
    const params = getParamsForRequest($config, body, store, true);
    return await $axios.$post('/Usuarios/CrearUsuario', params);
  },

  async modificarUsuario(body) {
    const params = getParamsForRequest($config, body, store, false, true);
    return await $axios.$post('/Usuarios/ModificarUsuario', params);
  },

  async eliminarUsuario(body) {
    const params = getParamsForRequest($config, body, store, false, true);
    return await $axios.$post('/Usuarios/EliminarUsuario', params);
  },

  async obtenerUsuario(body) {
    const params = getParamsForRequest($config, body, store, true);
    return await $axios.$post('/Usuarios/ObtenerUsuario', params);
  },

  async obtenerPassUsuarioRepwin(body) {
    const params = getParamsForRequest($config, body, store, true);
    return await $axios.$post('/Usuarios/ObtenerPasswordUsuarioPorIdJugadorRepwin', params);
  },

  async recuperarPasswordUsuario(body) {
    const params = getParamsForRequest($config, body, store, true);
    return await $axios.$post('/Usuarios/RecuperarPasswordUsuario', params);
  },

  async modificarPasswordUsuario(body) {
    const params = getParamsForRequest($config, body, store, false, true);
    return await $axios.$post('/Usuarios/ModificarPasswordUsuario', params);
  },

  async logarUsuario(body) {
    const params = getParamsForRequest($config, body, store, true);
    return await $axios.$post('/Usuarios/LogarUsuario', params);
  },

  async obtenerReservasUsuario(body) {
    const params = getParamsForRequest($config, body, store, false, true);
    return await $axios.$post('/Usuarios/ObtenerReservasUsuario', params);
  },

  async obtenerReservasZonasUsuario(body) {
    const params = getParamsForRequest($config, body, store, true);
    return await $axios.$post('/Usuarios/ObtenerReservasZonasUsuario', params);
  },

  async listarTarjetasUsuario(body) {
    const params = getParamsForRequest($config, body, store, false, true);
    return await $axios.$post('/Usuarios/ListarTarjetasUsuario', params);
  },

  async crearTarjetaUsuario(body) {
    const params = getParamsForRequest($config, body, store, true);
    return await $axios.$post('/Usuarios/CrearTarjetaUsuario', params);
  },

  async crearTarjetaExtendidaUsuario(body) {
    const params = getParamsForRequest($config, body, store, true);
    return await $axios.$post('/Usuarios/CrearTarjetaExtendidaUsuario', params);
  },

  async eliminarTarjetaUsuario(body) {
    const params = getParamsForRequest($config, body, store, false, true);
    return await $axios.$post('/Usuarios/EliminarTarjetaUsuario', params);
  },

  async comprobarExisteTarjetaUsuario(body) {
    const params = getParamsForRequest($config, body, store, true);
    return await $axios.$post('/Usuarios/ComprobarExisteTarjetaUsuario', params);
  },

  async obtenerUsuarioRecorridosFavoritos(body) {
    const params = getParamsForRequest($config, body, store, true);
    return await $axios.$post('/Usuarios/ObtenerUsuarioRecorridosFavoritos', params);
  },

  async crearUsuarioRecorridoFavorito(body) {
    const params = getParamsForRequest($config, body, store, true);
    return await $axios.$post('/Usuarios/CrearUsuarioRecorridoFavorito', params);
  },

  async eliminarUsuarioREcorridoFavorito(body) {
    const params = getParamsForRequest($config, body, store, true);
    return await $axios.$post('/Usuarios/EliminarUsuarioREcorridoFavorito', params);
  },

  async obtenerNotificacionesPushUsuario(body) {
    const params = getParamsForRequest($config, body, store, true);
    return await $axios.$post('/Usuarios/ObtenerNotificacionesPushUsuario', params);
  },
});
