export const state = () => ({
	message: { show: false, msg: null, class: null },
});

export const getters = {
	getMessage(state) { return state.message; },
}

export const mutations = {
	setMessage(state, payload) { state.message = payload; },
}

export const actions = {
	
}
