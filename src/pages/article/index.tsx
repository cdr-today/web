import React from 'react';
import api from '@/api/article';
import { Typography, Divider } from 'antd';
import router from 'umi/router';
const { Title } = Typography;

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
    api[`get_${query.type}`](query).then(r => {
      if (r.data.errMsg === 'ok' && r.data.data.length === 1) {
	this.setState({
	  title: r.data.data[0].title,
	  content: r.data.data[0].content
	})
      } else {
	router.push('/404');
      }
    });
  }
  
  render() {
    return(
      <div>
	<Title level={2}>{this.state.title}</Title>
	<Divider />
	<content>{this.state.content}</content>
      </div>
    );
  }
}


