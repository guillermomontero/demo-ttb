export const state = () => ({
	locale: 'en',
	culture: 'en-GB',
	currency: 'GBP',
	decimal: '.',
});

export const getters = {
	getLocale(state) { return state.locale; },
	getCulture(state) { return state.culture; },
	getCurrency(state) { return state.currency; },
	getDedimal(state) { return state.decimal; },
}

export const mutations = {
	setLocale(state, payload) { state.locale = payload; },
	setCulture(state, payload) { state.culture = payload; },
	setCurrency(state, payload) { state.currency = payload; },
	setDecimal(state, payload) { state.decimal = payload; },
}

export const actions = {
	
}
