export const saveUserLoginDataInStoreAndCookie = (datos, $store) => {
  const dateExpires = new Date(datos.expiracion).toUTCString();
  document.cookie = `userToken=${datos.token}; path=/; expires=${dateExpires};`;
  document.cookie = `userTokenExpires=${dateExpires}; path=/; expires=${dateExpires};`;
  document.cookie = `userId=${datos.idUsuario}; path=/; expires=${dateExpires};`;
  document.cookie = `isUserLoggedIn=${true}; path=/; expires=${dateExpires};`;
  
  $store.commit('auth/setUserToken', datos.token);
  $store.commit('auth/setUserTokenExpires', dateExpires);
  $store.commit('auth/setUserId', datos.idUsuario);
  $store.commit('auth/setIsUserLoggedIn', true);
}

export default {
  saveUserLoginDataInStoreAndCookie
}
