import React from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import api from '@/api/article';
import { Row, Col, Button, Tabs, Divider, Empty } from 'antd';
import ArticleThum from '@/components/article_thum';
import ss from '@/styles/index.less';

const { TabPane } = Tabs;

class _Articles extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  
  componentWillMount() {
    const { dispatch } = this.props;
    api.get_article_thums().then(r => {
      if (r.data.errMsg === 'ok') {
	dispatch({ type: 'stat/thums', payload: r.data.data })
      }
    });
  }

  render() {
    const { stat, dispatch } = this.props;
    
    if (stat.thums.length === 0) {
      return (
	<div>
	  <div className={ss.empty}>暂无草稿</div>
	  <Divider />
	</div>
      )
    } else {
      return (
	<div>
	  {stat.thums.map(r => (
	    <ArticleThum key={r._id} title={r.title} id={r._id} />
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
  const { dispatch, stat } = props;

  const callback = (key) => {
    console.log(key);
  }

  const editor = () => {
    router.push('/editor');
  }
  
  return (
    <section className={ss.page}>
      <Row className={ss.top_row} type='flex'>
	<Col span={12}>
	  <p className={ss.title}>我的文章</p>
	</Col>
	<Col className={ss.tools} span={12}>
	  {stat.login === false?'':<Button className={ss.push_article} size='large' onClick={editor}>写文章</Button>}
	</Col>
      </Row>
      <Divider />
      <Row>
	{stat.login?
	  <Articles type='article' />:
	  (<div>
	    <div className={ss.empty}>暂无草稿</div>
	    <Divider />
	  </div>
	  )
	}
      </Row>
    </section>
  );
}

export default connect(({ modal, login, stat }) => ({
  modal, login, stat
}))(Index);
