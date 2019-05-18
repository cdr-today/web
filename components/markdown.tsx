import React, { Component } from 'react';
import Prism from 'prismjs';
import Editor from 'draft-js-plugins-editor';
import createPrismPlugin from 'draft-js-prism-plugin';
import createMarkdownShortcutsPlugin from 'draft-js-markdown-shortcuts-plugin';
import Draft, { EditorState } from 'draft-js';

import "prismjs/themes/prism.css";

const plugins = [
  createMarkdownShortcutsPlugin(),
  createPrismPlugin({ prism: Prism}),
];

export default class DemoEditor extends Component {

  state = {
    editorState: Draft.EditorState.createWithContent(emptyContentState),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  setEditor = (editor) => {
    this.editor = editor;
  };
  
  focusEditor = () => {
    if (this.editor) {
      this.editor.focus();
    }
  };

  render() {
    return (
      <div style={{minHeight: '30vh'}} onClick={this.focusEditor}>
	<Editor
	  ref={this.setEditor}
	  style={{height: '30vh'}}
          editorKey="foobaz"
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
	/>
      </div>
    );
  }
}

const emptyContentState = Draft.convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: '',
      key: 'foo',
      type: 'unstyled',
      entityRanges: [],
    },
  ],
});
