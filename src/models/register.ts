import { message } from 'antd';

export default {
  state: {
    username: '',
    password: '',
    password_r: ''
  },
  reducers: {
    'username'(state, { payload: str }) {
      state.username = str;
      return state;
    },
    'password'(state, { payload: str }) {
      state.password = str;
      return state;
    },
    'password_r'(state, { payload: str }) {
      state.password_r = str;
      return state;
    },
    'clear'(state, { payload: _ }) {
      state = {
	username: '',
	password: '',
	password_r: ''
      }
      return state;
    }
  }
}
