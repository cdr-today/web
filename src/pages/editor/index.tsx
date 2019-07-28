import React from 'react';
import { connect } from 'dva';
import ss from '@/styles/editor.less';
import { Typography, Divider } from 'antd';

const { Title } = Typography;

const Editor = props => {
  const { editor, dispatch } = props;

  const tc = e => dispatch({ type: 'editor/title', payload: e.target.value });
  const cc = e => dispatch({ type: 'editor/content', payload: e.target.value });
  
  return (
    <main className={ss.editor}>
      <Title level={2}><input className={ss.title} onChange={tc} value={editor.title}/></Title>
      <Divider />
      <textarea className={ss.content} onChange={cc} value={editor.content}/>
    </main>
  );
}

export default connect(({ editor }) => ({
  editor
}))(Editor);
