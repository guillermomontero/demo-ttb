export const state = () => ({
	cartLocator: null,
	cartJSON: null,
	cartItems: 0,
});

export const getters = {
	getCartLocator(state) { return state.cartLocator; },
	getCartJSON(state) { return state.cartJSON; },
	getCartItems(state) { return state.cartJSON; },
}

export const mutations = {
	setCartLocator(state, payload) { state.cartLocator = payload; },
	setCartJSON(state, payload) { state.cartJSON = payload; },
	setCartItems(state, payload) { state.cartItems = payload; }
}

export const actions = {
	setCart ({ commit }, payload) {
		commit('setCartJSON', payload);

		let numberItems = 0;
		
		if (payload) {
			payload.listaClubesRecorridos.forEach(element => {
				numberItems += element.listaTeeTimes.length;
			});
		}

		commit('setCartItems', numberItems);
	}
}
