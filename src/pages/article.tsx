import React from 'react';
import api from '@/api/article';
import { Typography, Divider, message } from 'antd';
import router from 'umi/router';
const { Title } = Typography;

import ss from '@/styles/article.less';

export default class Article extends React.Component {
  state = {
    title: '',
    content: ''
  }

  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() {
    let query = this.props.history.location.query;
    api.get_article(query).then(r => {
      if (r.data.errMsg === 'ok') {
	this.setState({
	  title: r.data.data.title,
	  content: r.data.data.content
	})
      } else {
	message.error('网络错误');
	router.push('/404');
      }
    });
  }

  render() {
    return(
      <div className={ss.page}>
	<Title level={2}>{this.state.title}</Title>
	<Divider />
	<div className={ss.content}>{this.state.content}</div>
      </div>
    );
  }
}
