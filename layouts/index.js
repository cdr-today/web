import s from 'store';
import r from 'umi/router';
import sdk from '../../sdk';
import React from 'react';

;(function() {
  const seed = s.get('seed');
  const author = s.get('author');

  if (seed == undefined || author == undefined) {
    r.push('/login');
  }
})();

export default class Index extends React.Component {
  render() {
      return (
	<div>
	  <main>{ this.props.children }</main>
	</div>
      );
  }
}
