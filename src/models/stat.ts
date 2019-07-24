export default {
  state: {
    login: false,
    user: {
      username: 'Anonymous'
    }
  },
  reducers: {
    'login'(state, { payload: bool }) {
      state.login = bool;
      return state;
    },
    'user'(state, { payload: obj }) {
      state.user = obj;
      return state;
    }
  }
}
