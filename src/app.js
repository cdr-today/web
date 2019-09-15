import 'antd/dist/antd.less';

function check() {
  const path = window.location.pathname;
  let parts = path.split('/');
  
  let author;
  parts[1]?author = parts[1] : author = 'cdr.today';
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
