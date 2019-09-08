import React from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import api from '@/api/article';
import { Row, Divider, Empty } from 'antd';
import ss from '@/styles/index.less';
import ArticleThum from '@/components/article_thum';

class _Articles extends React.Component {
  state = {
    articles: []
  }
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  componentWillMount() {
    const host = window.location.host;
    let parts = host.split('.');
    let author = parts[0];
    document.title = author;
    
    api.get_articles(author).then(r => {
      this.setState({
	articles: r.articles
      })
    })
  }

  render() {
    if (this.state.articles.length === 0) {
      return (
	<div>
	  <div className={ss.empty}>暂无文章</div>
	</div>
      )
    } else {
      return (
     	<div>
     	{this.state.articles.map(r => (
     	  <ArticleThum key={r.id} title={r.title} id={r.id} />
     	))}
     	</div>
      )
    }
  }
};

const Articles = connect(({ stat }) => ({
  stat
}))(_Articles);

const Index = props => {
  const host = window.location.host;
  let parts = host.split('.');
  let author = parts[0];
  
  return (
    <section className={ss.page}>
      <Row>
	<Articles type='article' />
      </Row>
    </section>
  );
}

export default connect(({ modal, login, stat }) => ({
  modal, login, stat
}))(Index);
