import { getCookie } from '../utils/getCookie';

export const state = () => ({
  currentURL: null,
  viewportWidth: '',
})

export const getters = {
  isHomePage(state) {
    if (state.currentURL === '/' || state.currentURL === '/en' || state.currentURL === '/es' || state.currentURL === '/fr' || state.currentURL === '/sv') return true;
    return false;
  }
}

export const mutations = {
  setCurrentURL(state, currentURL) {
    state.currentURL = currentURL;
  },
  
  setViewportWidth(state, width) {
    state.viewportWidth = width;
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req, res }) {
    const cookie = req.headers.cookie;
    
    const locale = getCookie(cookie, 'i18n_redirected', 'en');
    commit('culture/setLocale', locale);

    const culture = getCookie(cookie, 'culture', 'en-GB');
    commit('culture/setCulture', culture);

    const token = getCookie(cookie, 'token', null);
    commit('auth/setToken', token);

    const tokenExpires = getCookie(cookie, 'tokenExpires', null);
    commit('auth/setTokenExpires', tokenExpires);

    const sessionId = getCookie(cookie, 'sessionId', null);
    commit('auth/setSessionId', sessionId);

    const vendorId = getCookie(cookie, 'vendorId', null);
    commit('auth/setVendorId', vendorId);

    const cartLocator = getCookie(cookie, 'cartLocator', null);
    commit('cart/setCartLocator', cartLocator);

    const userToken = getCookie(cookie, 'userToken', null);
    commit('auth/setUserToken', userToken);

    const userTokenExpires = getCookie(cookie, 'userTokenExpires', null);
    commit('auth/setUserTokenExpires', userTokenExpires);

    const userId = getCookie(cookie, 'userId', null);
    commit('auth/setUserId', userId);

    const isUserLoggedIn = getCookie(cookie, 'isUserLoggedIn', null);
    commit('auth/setIsUserLoggedIn', Boolean(isUserLoggedIn));
    
    if (token) return;

    try {
      const params = new URLSearchParams();
      
      params.append('username', this.$config.axios.serverUser);
      params.append('password', this.$config.axios.serverPass);
      params.append('segundosExpiracion', this.$config.axios.serverTokenExpires);
      params.append('culture', locale);
      params.append('idVendedorSim', this.$config.axios.serverVendorId);

      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: params,
        url: `${this.$config.axios.serverTTBAPIURL}/Acceso/IniciarSesionFront`,
      };

      const { data } = await this.$axios(options);
      const dateExpires = new Date(data.datos.fechaExp).toUTCString();

      commit('auth/setToken', data.datos.token);
      commit('auth/setTokenExpires', dateExpires);
      commit('auth/setSessionId', data.datos.idInicioSesion);
      commit('auth/setVendorId', data.datos.idVendedor);

      res.setHeader('Set-Cookie', [`token=${data.datos.token}; path=/; expires=${dateExpires};`, `tokenExpires=${dateExpires}; path=/; expires=${dateExpires};`, `sessionId=${data.datos.idInicioSesion}; path=/; expires=${dateExpires};`, `vendorId=${data.datos.idVendedor}; path=/; expires=${dateExpires};`]);
    } catch (error) {
      throw new Error(error.data.msg);
    };
  }
}
