import { createDate } from "./date";

/**
 * @param {String} culture Cultura del cliente
 * @returns {Array} Literales de los días de la semana
 */
export const daysOfWeekLocale = (culture = 'en-GB') => {
  let week = [];

  switch (culture) {
    case 'en-GB':
      week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      break;

    case 'fr-FR':
      week = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];
      break;

    case 'sv-SE':
      week = ['SÖN', 'MÅN', 'TIS', 'ONS', 'TOR', 'FRE', 'LÖR'];
      break;

    case 'es-ES':
      week = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
      break;
  
    default:
      week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      break;
  }

  return week;
};

/**
 * @param {String} culture Cultura del cliente
 * @returns {Array} Literales de los meses del año
 */
export const monthsLocale = (culture = 'en-GB') => {
  let months = [];

  switch (culture) {
    case 'en-GB':
      months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      break;

    case 'fr-FR':
      months = ['JAN', 'FÉV', 'MAR', 'AVR', 'MAI', 'JUI', 'JUL', 'AOÛ', 'SEP', 'OCT', 'NOV', 'DÉC'];
      break;

    case 'sv-SE':
      months = ['JAN', 'FEB', 'MAR', 'APR', 'MAJ', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEC'];
      break;

    case 'es-ES':
      months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
      break;
  
    default:
      months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
      break;
  }

  return months;
};

/**
 * Función que devuelve el día seleccionado y los 6 siguientes días del calendario
 * @param {Date} date Fecha seleccionada en el calendario en formato 'YYYY-MM-DD'
 * @returns {Array} Objetos con día, mes, día de la semana y fecha
 */
export const getDaysOfWeek = (date = new Date()) => {
  // Formatear la fecha seleccionada
  const dateToGet = new Date(date);
  
  // Obtener año
  const currentYear = dateToGet.getFullYear();
  // Obtener mes actual
  const currentMonth = dateToGet.getMonth();
  // Obtener día
  const currentDay = dateToGet.getDate();
  // Obtener los días que tiene el mes en el que nos ubicamos
  const daysOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  const arrDays = [];
  
  let nextMonth = 0;
    
  if (currentMonth === 11) nextMonth = 0;
  else nextMonth = currentMonth + 1;

  // Devolver los 6 días posteriores a la fecha seleccionada
  for (let i = currentDay; i <= currentDay + 6; i++) {
    if (i > daysOfMonth) {
      if (currentMonth !== 11) {
        arrDays.push({
          day: i - daysOfMonth,
          month: nextMonth,
          dayOfWeek: new Date(currentYear, nextMonth, i - daysOfMonth).getDay(),
          date: createDate(new Date(currentYear, nextMonth, i - daysOfMonth))
        });
      }
      
      if (currentMonth === 11) {
        arrDays.push({
          day: i - daysOfMonth,
          month: nextMonth,
          dayOfWeek: new Date(currentYear + 1, nextMonth, i - daysOfMonth).getDay(),
          date: createDate(new Date(currentYear + 1, nextMonth, i - daysOfMonth))
        });
      }
    }

    if (i <= daysOfMonth) {
      arrDays.push({
        day: i,
        month: currentMonth,
        dayOfWeek: new Date(currentYear, currentMonth, i).getDay(),
        date: createDate(new Date(currentYear, currentMonth, i))
      })
    }
  }
  
  return arrDays;
}

/**
 * @param {Date} date Fecha seleccionada en el calendario en formato 'YYYY-MM-DD'
 * @returns {Date} Día anterior al día seleccionado
 */
export const getPreviusDay = (date = new Date()) => {
  const dateToGet = new Date(date);

  // Obtener año
  let currentYear = dateToGet.getFullYear();
  // Obtener mes actual
  let currentMonth = dateToGet.getMonth();
  // Obtener día
  let currentDay = dateToGet.getDate();

  if (currentMonth === 0 && currentDay === 1) {
    currentYear = currentYear - 1;
    currentMonth = 11;
    currentDay = 31;
  } else if (currentMonth !== 0 && currentDay === 1) {
    currentMonth = currentMonth - 1;
    currentDay = new Date(currentYear, currentMonth + 1, 0).getDate();
  } else {
    currentDay = currentDay - 1;
  }

  return createDate(new Date(currentYear, currentMonth, currentDay));
};

/**
 * @param {Date} date Fecha seleccionada en el calendario en formato 'YYYY-MM-DD'
 * @returns {Date} Día siguiente al día seleccionado
 */
export const getNextDay = (date = new Date()) => {
  const dateToGet = new Date(date);

  // Obtener año
  let currentYear = dateToGet.getFullYear();
  // Obtener mes actual
  let currentMonth = dateToGet.getMonth();
  // Obtener día
  let currentDay = dateToGet.getDate();

  if (currentMonth === 11 && currentDay === 31) {
    currentYear = currentYear + 1;
    currentMonth = 0;
    currentDay = 1;
  } else if (currentMonth !== 11 && currentDay === new Date(currentYear, currentMonth + 1, 0).getDate()) {
    currentMonth = currentMonth + 1;
    currentDay = 1;
  } else {
    currentDay = currentDay + 1;
  }

  return createDate(new Date(currentYear, currentMonth, currentDay));
}
