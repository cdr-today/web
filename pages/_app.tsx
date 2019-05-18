import React from 'react';
import App from 'next/app';
import Link from 'next/link';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import { Layout } from 'antd';
import { OkApp, OkButton } from '../components';

import 'antd/dist/antd.less';
import '../styles/app.less';

const store = createStore(rootReducer);
const { Content } = Layout;

const styles = {
  layout: {
    minHeight: '100vh'
  },
  content: {
    padding: '2rem',
    background: '#fff',
    height: '100%',
  }  
}

class Amnesia extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
	<Layout style={styles.layout}>
          <Content style={styles.content}>
	    <OkApp.Drawer />
	    <Component {...pageProps}/>
          </Content>
	</Layout>
      </Provider>
    )
  }
}

export default Amnesia;
