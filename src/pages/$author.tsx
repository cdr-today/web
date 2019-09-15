import React from 'react';
import router from 'umi/router';
import { display } from '@/x/time';
import api from '@/api/article';
import ss from '@/styles/index.less';
import ArticleThum from '@/components/article_thum';
import { Row, Divider, Empty } from 'antd';
import BottomScrollListener from 'react-bottom-scroll-listener';

class Articles extends React.Component {
  state = {
    posts: [],
    ticking: false,
    page: 0,
    reachedMax: false,
  }

  constructor(props) {
    super(props);
    this.props = props;
  }
  
  componentWillMount() {
    // generate title
    let author = document.title;

    // parse psts
    api.get_articles(author, this.state.page).then(r => {
      let docs = r.posts.map(i => {
	i.date = display(i.timestamp);
	let doc = JSON.parse(i.document);
	
	for (let e in doc) {
	  if (doc[e]['insert'].match(/\S/)) {
	    i.title = doc[e]['insert'];
	    break;
	  }
	}
	
	return i;
      })
      
      this.setState({ posts: docs })
    })
  }

  bottom() {
    if (this.state.reachedMax) {
      return;
    }
    
    this.setState({
      page: this.state.page + 1
    })

    let author = document.title;
    api.get_articles(author, this.state.page).then(r => {
      if (r.posts.length == 0) {
	this.setState({ reachedMax: true });
	return;
      }
      
      let docs = r.posts.map(i => {
	let doc = JSON.parse(i.document);
	
	for (let e in doc) {
	  if (doc[e]['insert'].match(/\S/)) {
	    i.title = doc[e]['insert'];
	    break;
	  }
	}
	
	return i;
      })

      let _docs = this.state.posts;
      _docs = _docs.concat(docs);
      this.setState({ posts: _docs })
    })
  }
  
  render() {
    if (this.state.posts.length === 0) {
      return (
	<div>
	  <div className={ss.empty}>暂无文章</div>
	</div>
      );
    } else {
      return (
     	<div id='posts'>
     	{this.state.posts.map(r => (
     	  <ArticleThum key={r.id} title={r.title} id={r.id} date={r.date}/>
     	))}
	  <BottomScrollListener onBottom={this.bottom.bind(this)} />
     	</div>
      );
    }
  }
};

const Index = props => {
  return (
    <section className={ss.page}>
      <Row>
	<Articles type='article' />
      </Row>
    </section>
  );
}

export default Index;
