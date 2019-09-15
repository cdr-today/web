import 'antd/dist/antd.less';

function check() {
  const host = window.location.host;
  const path = window.location.pathname;
  let parts = path.split('/');
  
  let author;
  parts[2]?author = parts[2] : author = 'cdr.today';
  document.title = author;
}

check();

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
