import store from 'store';
import router from 'umi/router';

export default {
  state: {
    login: false,
    user: {
      username: 'Anonymous',
      token: '',
    },
    thums: []
  },
  reducers: {
    login(state, { payload: bool }) {
      state.login = bool;

      // set user data;
      let user = store.get('store_data');
      state.user.token !== user.token? state.user = user: ''

      // logout;
      bool === false? store.clearAll(): ''
      
      return state;
    },
    user(state, { payload: obj }) {
      state.user = obj;
      return state;
    },
    thums(state, { payload: arr }) {
      state.thums = arr;
      return state;
    }
  }
}
