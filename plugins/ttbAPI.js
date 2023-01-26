import comparisonResult from '@/config/constants/comparisonResult';
import { compareTwoDates } from '@/utils/date';
import accesoAPI from '@/api/acceso';
import boletinAPI from '@/api/boletin';
import busquedaAPI from '@/api/busqueda';
import cancelacionAPI from '@/api/cancelacion';
import carritosReservaAPI from '@/api/carritosreserva';
import confFrontalWebAPI from '@/api/conffrontalweb';
import datosClubAPI from '@/api/datosclub';
import disponibilidadAPI from '@/api/disponibilidad';
import homeAPI from '@/api/home';
import informacionAPI from '@/api/informacion';
import ofertasAPI from '@/api/ofertas';
import preCancelacionAPI from '@/api/precancelacion';
import preReservaAPI from '@/api/prereserva';
import reservaAPI from '@/api/reserva';
import textosAPI from '@/api/textos';
import usuariosAPI from '@/api/usuarios';
import vendedoresAPI from '@/api/vendedores';
import paisesAPI from '@/api/paises';

export default ({ $axios, store, redirect, route, $config }, inject) => {
  $axios.onRequest(config => {
    if (!config.data.avoidSpinner) store.commit('spinner/setShowSpinner', true);

    const result = compareTwoDates(new Date(),new Date(store.state.auth._tokenExpires));
    if (result === comparisonResult.Bigger || result === comparisonResult.Equal) redirect(route.fullPath);
  });

  $axios.onResponse(config =>  {
    return new Promise((resolve, reject) => {

      if (config.data.cod === 1) {
        resolve(config);
      }

      if (config.data.cod === 2 || config.data.cod === 3) {
        reject(config);
      }

      if (config.data.cod === 4) {
        reject(config);
        // Manejar la lógica de los unauthenticated. Redirigir a /Login, probablemente.
      }

      store.commit('spinner/setShowSpinner', false);
    });
  })

  const api = {
    acceso: accesoAPI($axios, $config, store),
    boletin: boletinAPI($axios, $config, store),
    busqueda: busquedaAPI($axios, $config, store),
    cancelacion: cancelacionAPI($axios, $config, store),
    carritosreserva: carritosReservaAPI($axios, $config, store),
    conffrontalweb: confFrontalWebAPI($axios, $config, store),
    datosclub: datosClubAPI($axios, $config, store),
    disponibilidad: disponibilidadAPI($axios, $config, store),
    home: homeAPI($axios, $config, store),
    informacion: informacionAPI($axios, $config, store),
    ofertas: ofertasAPI($axios, $config, store),
    precancelacion: preCancelacionAPI($axios, $config, store),
    prereserva: preReservaAPI($axios, $config, store),
    reserva: reservaAPI($axios, $config, store),
    textos: textosAPI($axios, $config, store),
    usuarios: usuariosAPI($axios, $config, store),
    vendedores: vendedoresAPI($axios, $config, store),
    paises: paisesAPI($axios, $config, store),
  };

  inject('api', api);
}