import Vue from 'vue';

// Con de-DE aparecen los puntos para marcar los miles con es-ES no
const defaultCulturaParaDecimales = 'de-DE';

/**
 * Filtro para convertir a moneda local
 * @param {Number} number número a formatear -> 1 || 1.234
 * @param {String} decimal decimal a aplicar
 * @returns 1,00 € || 1,23 €
 */
 Vue.filter('toCurrency', (number, decimal) => {
  if (!number) return '--';

  let price = String(number);

  if (price.includes('.')) {
    const price1 = price.split('.')[0];
    let price2 = price.split('.')[1];

    if (price2.length === 1) price2 = `${price2}0`;
    if (price2.length > 2) price2 = price.slice(0, 2);

    price = `${price1}${decimal}${price2}`;
  } else {
    price = `${price}${decimal}00`;
  }

  return `${price}<span class="font-normal">€</span>`;
});

/**
 * Filtro para convertir a moneda local
 * @param {Number} number número a formatear -> 123
 * @param {String} culture cultura a aplicar
 * @param {String} currency código de la moneda a aplicar
 * @returns 123,00 €
 */
Vue.filter('toLocaleCurrency', (number, culture, currency) => {
  const cultureBug = culture === 'es-ES' ? 'de-DE' : culture;

  if (number || number === 0) {
    return number.toLocaleString(cultureBug || defaultCulturaParaDecimales, {
      style: 'currency',
      currency,
    });
  }

  return number;
});

/**
 * Filtro para convertir hora en formato date a hora local
 * @param {Date} hour hora a formatear -> 2022-09-30T12:34:56.123Z
 * @returns 12:34
 */
 Vue.filter('toLocaleHourDateFormat', (hour) => {
  return hour.split('T')[1].slice(0, 5);
});

/**
 * Filtro para convertir hora en formato date a hora local sin un cero en horas comprendidas entre las 00:00 y las 09:59
 * @param {String} hour string a formatear -> 01:23 || 12:34
 * @returns 1:23 || 12:34
 */
Vue.filter('toLocaleHourStringFormat', (hour) => {
  if (!hour) return '--';
  
  let newHour = hour;
  const h = newHour.split(':')[0];
  const m = newHour.split(':')[1];

  let firstDigit = h[0];
  if (firstDigit === '0') {
    firstDigit = h[1];
    newHour = `${firstDigit}:${m}`;
  }

  return newHour;
});

/**
 * Filtro para convertir hora en formato date a hora local con un cero en horas comprendidas entre las 00:00 y las 09:59
 * @param {String} hour string a formatear -> 01:23 || 12:34
 * @returns 01:23 || 12:34
 */
Vue.filter('toLocaleHourStringFormatWithZero', (hour) => {
  const h = hour.split(':')[0];
  const m = hour.split(':')[1];

  // Si la hora tiene sólo un dígito se le añade un cero a la izquierda
  hour = `${h.length === 1 ? '0' + h : h}:${m}`;
  return hour;
});

/**
 * Filtro para convertir la fecha a la fecha local
 * @param {String} date fecha a formatear -> 2022-01-01T00:00:00
 * @returns 01/01/2022
 */
Vue.filter('toLocaleDate', (date = new Date(), culture = 'en-GB') => {
  return new Date(date).toLocaleDateString(culture);
});

/**
 * Filtro para convertir número a porcentaje
 * @param {Number|String} value Valor a formatear -> 1
 * @returns 1%
 */
Vue.filter('toPercent', (value = 0) => {
  return `${value}%`;
});
