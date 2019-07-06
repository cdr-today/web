import React from 'react';
import sdk from '../../../sdk';
import ss from '@/styles/blog.css';
import router from 'umi/router';

export default class Blog extends React.Component {
  state = {
    author: '',
    articles: []
  }

  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    let author = this.props.location.pathname.slice(1);
    sdk.get(author).then(r => {
      this.setState({
	author: author,
	articles: r.result
      })
    })
  }

  article(e) {
    router.push(`/${this.state.author}/${e}`);
  }
  
  render() {
    return (
      <main className={ss.page}>
	<div className={ss.header}>
	  <h1>{this.state.author}</h1>
	  <hr/>
	</div>
	<div className={ss.container}>
	  {this.state.articles.map((e, i) => {
	    let article = JSON.parse(e[1]);
	    let _time = new Date(article.timestamp * 1000);
	    let time = '' + _time.getFullYear() + '/'
	      + (_time.getMonth() + 1) + '/'
	      + _time.getDate();
	    
	    return (
	      <div key={e[0]} className={ss.article} onClick={this.article.bind(this, e[0])}>
		<h2>{article.title}</h2>
		<div>{article.content}</div>
		<br/>
		<div className={ss.article_time}>{time}</div>
	      </div>
	    )
	  })}
	</div>
      </main>
    );
  }
}
