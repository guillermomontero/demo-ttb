export const state = () => ({
	_token: null,
	_userToken: null,
  _tokenExpires: null,
  _userTokenExpires: null,
  _sessionId: null,
  _vendorId: null,
  _userId: null,
  _isUserLoggedIn: null,
});

export const getters = {
	getToken(state) { return state._token; },
	getUserToken(state) { return state._userToken; },
	getTokenExpires(state) { return state._tokenExpires; },
	getUserTokenExpires(state) { return state._userTokenExpires; },
	getSessionId(state) { return state._sessionId; },
	getVendorId(state) { return state._vendorId; },
	getUserId(state) { return state._userId; },
	getIsUserLoggedIn(state) { return state._isUserLoggedIn; },
}

export const mutations = {
	setToken(state, payload) { state._token = payload; },
	setUserToken(state, payload) { state._userToken = payload; },
	setTokenExpires(state, payload) { state._tokenExpires = payload; },
	setUserTokenExpires(state, payload) { state._userTokenExpires = payload; },
	setSessionId(state, payload) { state._sessionId = payload; },
	setVendorId(state, payload) { state._vendorId = payload; },
	setUserId(state, payload) { state._userId = payload; },
	setIsUserLoggedIn(state, payload) { state._isUserLoggedIn = payload; },
}

export const actions = {}
