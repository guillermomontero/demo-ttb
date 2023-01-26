const COOKIE_SEPARATOR = ';';

/**
 * Obtenemos el valor de una cookie
 * @param {String} cookie valor de la cookie en el cliente
 * @param {String} searchCookie valor de la cookie que queremos obtener
 * @param {*} fallBack valor por defecto
 * @returns param || fallBack
 */
export const getCookie = (cookie = '', searchCookie = '', fallBack = null) => {
  const trimmedCookieKeyValuePairs = cookie.split(COOKIE_SEPARATOR).map(cookie => cookie.trim());
  const cookieValues = new Map();

  for (const cookieKeyValuePair of trimmedCookieKeyValuePairs) {
    const indexOfSeparator = cookieKeyValuePair.indexOf('=');
    const key = cookieKeyValuePair.substring(0, indexOfSeparator);
    const value = cookieKeyValuePair.substring(indexOfSeparator+1);
    cookieValues.set(key, value);
  }

  return cookieValues.get(searchCookie) ?? fallBack;
};
