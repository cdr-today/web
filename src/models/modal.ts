export default {
  state: {
    login: false,
    register: false,
    profile: false,
    profile_menu: false
  },
  reducers: {
    'login'(state, { payload: bool }) {
      state.login = bool;
      return state;
    },
    'register'(state, { payload: bool }) {
      state.register = bool;
      return state;
    },
    'profile'(state, { payload: bool }) {
      state.profile = bool;
      return state;
    }
  }
}
