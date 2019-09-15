import 'antd/dist/antd.less';

function check() {
  const host = window.location.host;
  const path = window.location.pathname;

  if (path == '/') {
    window.location.replace("https://intro.cdr.today");
  }

  let author = path.slice(1);
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
