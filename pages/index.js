import s from 'store';
import sdk from '../../sdk';
import React from 'react';
import { Button } from 'antd';
import styles from '@/styles/index.css';

export default class Index extends React.Component {
  state = {
    title: '',
    content: ''
  }

  componentDidMount() {
    this.setState({
      title: s.get('article_title'),
      content: s.get('article_content')
    });
  }

  onChange(e, tag) {
    this.setState({
      [tag]: e.target.value
    });
    s.set(`article_${tag}`, e.target.value);
  }
  
  publish() {
    if (title == '') {
      alert('请输入文章标题...');
      return;
    } else if(content == '') {
      alert('请输入文章内容...');
      return;
    }
    
    let obj = {
      title: this.state.title,
      content: this.state.content
    };
    
    sdk.post(obj).then(r => {
      if (r.msg && r.msg.match('OK_010')) {
	alert('发布成功！');
	this.setState({
	  title: '', content: ''
	});

	s.set('article_title', '');
	s.set('article_content', '');
      }
    }).catch(err => {
      console.error(err);
    })
  }
  
  render() {
    return (
      <main>
	<nav className={styles.header}>
	  <input
	    value={this.state.title}
	    className={styles.title}
	    placeholder="输入文章标题..."
	    onChange={e => this.onChange(e, 'title')}
	  />
	  <div className={styles.tools}>
	    <div className={styles.item}>文章列表</div>
	    <div className={styles.item}>{s.get('author')}</div>
	  </div>
	</nav>
	<div className={styles.normal}>
	  <textarea
	  value={this.state.content}
	  className={styles.content}
	  placeholder='输入文章内容...'
	  onChange={e => this.onChange(e, 'content')}
	  />
	  <Button
	    className={styles.post}
	    type="normal" size='large'
	    onClick={this.publish}
	  >发布</Button>
	</div>
      </main>
    );
  }
}
