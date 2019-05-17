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

  render() {
    return (
      <Editor
        editorKey="foobaz"
        editorState={this.state.editorState}
        onChange={this.onChange}
        plugins={plugins}
      />
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
