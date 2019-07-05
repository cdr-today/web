import sdk from '../../../sdk';
import React from 'react';

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
  
  render() {
    return (
      <main>
	<h1>{this.state.author}</h1>
	<hr/>
	<div>
	  {this.state.articles.map((e, i) => {
	    let article = JSON.parse(e[1]);
	    return (
	      <div key={i}>
		<h3>{article.title}</h3>
		<text>{article.content}</text>
		<br/>
		<text>{article.timestamp}</text>
	      </div>
	    )
	  })}
	</div>
      </main>
    );
  }
}
