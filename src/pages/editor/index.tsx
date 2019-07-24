import React from 'react';
import ss from '@/styles/editor.less';

export default function () {
  return (
    <main className={ss.editor}>
      <input className={ss.title}/>
      <textarea className={ss.content} />
    </main>
  );
}
