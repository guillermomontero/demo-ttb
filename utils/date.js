import comparisonResult from "@/config/constants/comparisonResult";

/** Comparar fechas
 * @param {String|Date} date1 Fecha a comparar 1
 * @param {String|Date} date2 Fecha a comparar 2
 * @returns {String} resultado
 */
export const compareTwoDates = (date1, date2) => {
  if (!date1 || !date2) {
    console.error('Date1 o Date2 no valido en utils/date.js');
    return;
  }

  const d1 = new Date(date1).getTime();
  const d2 = new Date(date2).getTime();

  if (d1 > d2) return comparisonResult.Bigger;
  if (d1 < d2) return comparisonResult.Smaller;

  return comparisonResult.Equal;
}

/**Crear un formato de fecha válido
 * @param {Date} date Fecha a formatear
 * @returns {String} Fecha en formato válido
 */
export const createDate = (date = new Date()) => {
  let dateToFormatt = date;
  const offset = dateToFormatt.getTimezoneOffset();

  dateToFormatt = new Date(dateToFormatt.getTime() - (offset * 60 * 1000));
  return dateToFormatt.toISOString().split('T')[0];
}

/**
 * Convertir la fecha a la fecha local
 * @param {String} date fecha a formatear -> 2022-01-01T00:00:00
 * @returns 01/01/2022
 */
export const toLocaleDate = (date = new Date(), culture = 'en-GB') => {
  return new Date(date).toLocaleDateString(culture);
}
