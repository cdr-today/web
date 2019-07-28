import axios from 'axios';
import store from 'store';
import 'antd/dist/antd.less';

// axios.defaults.baseURL = 'http://localhost:6000';
axios.defaults.headers = {
  'Access-Control-Allow-Origin': '*',
}

if (store.get('store_data')) {
  axios.defaults.headers.token = store.get('store_data').token;
}

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
