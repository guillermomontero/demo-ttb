export const state = () => ({
	bookingHour: null,
});

export const getters = {
	getBookingHour(state) { return state.bookingHour; },
}

export const mutations = {
	setBookingHour(state, payload) { state.bookingHour = payload; },
}

export const actions = {
	writeBookingHour ({ commit }, payload) {
    setTimeout(() => {
      commit('setBookingHour', payload)
    }, 200);
  },
}
