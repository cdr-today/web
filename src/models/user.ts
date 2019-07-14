export default {
  state: {
    login: false,
    register: false,
    menu: false,
    name: ''
  },
  reducers: {
    'login'(state, { payload: bool }) {
      return bool;
    },
    'register'(state, { payload: bool }) {
      return bool;
    },
    'menu'(state, { payload: bool }) {
      return bool;
    },
    'name'(state, { payload: str }) {
      return str;
    },
  }
}
