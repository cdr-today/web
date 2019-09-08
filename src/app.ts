import 'antd/dist/antd.less';

const host = window.location.host;
let parts = host.split('.');
let author = parts[0];
document.title = author;

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
