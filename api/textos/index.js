import getParamsForRequest from "@/api/getParamsForRequest";

export default ($axios, $config, store) => ({
  async getText(body) {
    const params = getParamsForRequest($config, body, store, true);
    return await $axios.$post('/Textos/ObtenerTexto', params);
  },

  async getTextoGenericoCookies(body) {
    const params = getParamsForRequest($config, body, store, true);
    return await $axios.$post('/Textos/ObtenerTextoGenericoCookies', params);
  }
})