import React from 'react';
import { notus } from '@/x/notus';
import api from '@/api/article';
import ss from '@/styles/article.less';
import { Typography } from 'antd';
const { Title } = Typography;



export default class Article extends React.Component {
  state = {
    doc: ''
  }

  constructor(props) {
    super(props);
    this.props = props;
  }

  componentWillMount() {
    let query = this.props.history.location.query;
    api.get_spec(query.id).then(r => {
      this.setState({ doc: notus(r.data.document)})
    })
  }

  render() {
    return(
      <div className={ss.page}>
	<Title level={2}>{this.state.title}</Title>
	<div className='markdown-body' dangerouslySetInnerHTML={{ __html: this.state.doc }} />
      </div>
    );
  }
}
