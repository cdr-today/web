export default {
  state: {
    login: false,
    register: false,
    logout: false,
    menu: false,
    name: '',
    stat: 'logout'
  },
  reducers: {
    'menu'(state, { payload: bool }) {
      return bool;
    },
    'name'(state, { payload: str }) {
      return str;
    },
    'stat'(state, { payload: str }) {
      state.stat = str;
      switch (str) {
	case 'x':
	  state.login = false;
	  state.logout = false;
	  state.register = false;
	  break;
	default:
	  state[str] === false? state[str] = true: '';
	  break;
      }
      return state;
    },
  }
}
