import 'antd/dist/antd.less';

function check() {
  const host = window.location.host;
  const parts = host.split('.');

  if (host == 'https://cdr.today' || parts.length > 3) {
    window.location.replace("https://intro.cdr.today");
  }

  let author = parts[0];
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
