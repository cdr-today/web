import React from 'react';
import App from 'next/app';
import Link from 'next/link';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import { Layout } from 'antd';
import { OkApp } from '../components';

import 'antd/dist/antd.less';
import '../styles/app.less';

const store = createStore(rootReducer);
const styles = {
  layout: {
    minHeight: '100vh'
  },
  content: {
    padding: '2rem',
    background: '#fff',
    minHeight: '100%',
  }  
}

class Amnesia extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
 	<OkApp.Drawer />
	<OkApp.Helper />	
	<Layout style={styles.layout} hasSider={true}>
	  <Layout.Content style={styles.content}>
	    <Component {...pageProps}/>
          </Layout.Content>
	</Layout>
      </Provider>
    )
  }
}

export default Amnesia;
