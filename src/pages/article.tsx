import React from 'react';
import api from '@/api/article';
import { Typography, Divider, message } from 'antd';
import router from 'umi/router';
const { Title } = Typography;

import ss from '@/styles/article.less';

export default class Article extends React.Component {
  state = {
    title: '',
    content: '',
    cover: ''
  }

  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() {
    let query = this.props.history.location.query;
    api.get_spec(query.id).then(r => {
      this.setState({
	title: r.data.title,
	content: r.data.content,
	cover: r.data.cover
      })
    })
  }

  render() {
    return(
      <div className={ss.page}>
	<Title level={2}>{this.state.title}</Title>
	<Divider />
	{
	  this.state.cover == ''?'':
	    <img
	      className={ss.image}
	      src={'http://pxddtegnl.bkt.clouddn.com/' + this.state.cover}
	    />
	}
	<div className={ss.content}>{this.state.content}</div>
      </div>
    );
  }
}
