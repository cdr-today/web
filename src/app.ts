import axios from 'axios';
import 'antd/dist/antd.less';

axios.defaults.baseURL = 'http://localhost:8000';

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
