export default {
  state: {
    login: false,
    register: false,
    menu: false,
  },
  reducers: {
    'login'(state, { payload: bool }) {
      state.login = bool;
      return state;
    },
    'register'(state, { payload: bool }) {
      state.register = bool;
      return state;
    }
  }
}
