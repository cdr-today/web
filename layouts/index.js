import s from 'store';
import r from 'umi/router';
import c from '../../sdk';

;(function() {
  window.c = c;
  
  const seed = s.get('seed');
  const author = s.get('author');

  if (seed == undefined || author == undefined) {
    r.push('/login');
  }
})();

export default (props) => (
  <main>
  { props.children }
  </main>
);
