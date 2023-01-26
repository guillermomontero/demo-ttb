export default {
  data() {
    return {
      showBaseAlert: false,
      alert: {},
    };
  },

  methods: {
    setAlert(isActive, type, message) {
      this.showBaseAlert = isActive;
      this.alert = { type, message};
    },
  }
}