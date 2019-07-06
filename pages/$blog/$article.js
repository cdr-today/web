import sdk from '../../../sdk';
import React from 'react';
import ss from '@/styles/article.css';

export default class Article extends React.Component {

  state = {
    tittle: '',
    content: '',
    time: ''
  }
  
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    let url = this.props.location.pathname.slice(1);
    sdk.get(url).then(r => {
      let article = JSON.parse(r.result);
      
      let _time = new Date(article.timestamp * 1000);
      let time = '' + _time.getFullYear() + '/'
	+ (_time.getMonth() + 1) + '/'
	+ _time.getDate();
      
      this.setState({
	title: article.title,
	content: article.content,
	time: time
      })
    })
  }
  
  render() {
    return (
      <main className={ss.page}>
	<div className={ss.header}>
	  <h1>{this.state.title}</h1>
	  <hr />
	</div>
	<div className={ss.container}>{this.state.content}</div>
	<div className={ss.footer}>
	  <hr />
	  <div className={ss.time}>{this.state.time}</div>
	</div>
      </main>
    )
  }
}
