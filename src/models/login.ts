import { message } from 'antd';

export default {
  state: {
    username: '',
    password: ''
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
    'clear'(state, { payload: _ }) {
      state = {
	username: '',
	password: ''
      }
      return state;
    }
  }
}
