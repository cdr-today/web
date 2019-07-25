import axios from 'axios';
import 'antd/dist/antd.less';

// axios.defaults.baseURL = 'http://localhost:6000';
axios.defaults.headers = {
  'Access-Control-Allow-Origin': '*',
}

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
