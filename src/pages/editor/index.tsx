import React from 'react';
import { connect } from 'dva';
import ss from '@/styles/editor.less';

const Editor = props => {
  const { editor, dispatch } = props;

  const tc = e => dispatch({ type: 'editor/title', payload: e.target.value });
  const cc = e => dispatch({ type: 'editor/content', payload: e.target.value });
  
  return (
    <main className={ss.editor}>
      <input className={ss.title} onChange={tc} value={editor.title}/>
      <textarea className={ss.content} onChange={cc} value={editor.content}/>
    </main>
  );
}

export default connect(({ editor }) => ({
  editor
}))(Editor);
