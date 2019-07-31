import React from 'react';
import { connect } from 'dva';
import ss from '@/styles/editor.less';
import { Typography, Divider } from 'antd';
import router from 'umi/router';

import api from '@/api/article';
const { Title } = Typography;

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() {
    let query = this.props.history.location.query;    
    if (query.id) {
      api.get_article(query).then(r => {
	if (r.data.errMsg === 'ok') {
	  this.props.dispatch({ type: 'editor/title', payload: r.data.data.title });
	  this.props.dispatch({ type: 'editor/content', payload: r.data.data.content });
	} else {
	  message.error('网络错误');
	  router.push('/');
	}
      })
    }
  }

  tc = async (e) => {
    await this.props.dispatch({ type: 'editor/title', payload: e.target.value });
  }

  cc = async (e) => {
    await this.props.dispatch({ type: 'editor/content', payload: e.target.value });
  }

  render() {
    const { editor } = this.props;
    return (
      <main className={ss.editor}>
	<Title level={2}><input className={ss.title} onChange={this.tc} value={editor.title}/></Title>
	<Divider />
	<textarea className={ss.content} onChange={this.cc} value={editor.content}/>
      </main>
    );
  }
}

export default connect(({ editor }) => ({
  editor
}))(Editor);
