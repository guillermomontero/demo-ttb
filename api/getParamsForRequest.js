
/** Función que agrupa el payload que se envía a la API
 * @param {Object} $config Contiene datos que se han guardados en publicRuntimeConfig y privateRuntimeConfig de nuxt.config.js
 * @param {Object} customBody Parámetros variables
 * @param {Object} store Store de la aplicación (Vuex)
 * 
 * @returns {Object} { param1, param2, param3, ...}
 */
 export default ($config, customBody = {}, store, isUserLoggingIn = false, isUserLoggedIn = false) => {
  const notLoginDefaultBody = {
    token: store.state.auth._token,
    culture: store.state.culture.culture,
    idVendedor: store.state.auth._vendorId,
    idInicioSesion: store.state.auth._sessionId,
  };
  
  const loggingInDefaultBody = {
    ...notLoginDefaultBody,
    culture: store.state.culture.culture,
    idCliente: $config.axios.clienteId,
    // idJugadorRepwin: -1,
  };
  
  const loggedInDefaultBody = {
    idVendedor: store.state.auth._vendorId,
    idInicioSesion: store.state.auth._sessionId,
    culture: store.state.culture.culture,
    idCliente: $config.axios.clienteId,
    idUsuario: store.state.auth._userId,
    token: store.state.auth._token,
    userToken: store.state.auth._userToken,
  };
  
  let defaultBody = {};
  if (!isUserLoggingIn && !isUserLoggedIn) defaultBody = notLoginDefaultBody;
  if (isUserLoggingIn) defaultBody = loggingInDefaultBody;
  if (isUserLoggedIn) defaultBody = loggedInDefaultBody;

  return { ...defaultBody, ...customBody };
} 