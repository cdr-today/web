import React from 'react';
import App from 'next/app';
import { Layout, Breadcrumb } from 'antd';
import 'antd/dist/antd.less'; 

const { Header, Content, Footer } = Layout;

class Amnesia extends App {
  render() {
    const { Component, pageProps } = this.props
    
    return (
      <main>
	{/*navigator*/}
	<Layout className='layout' style={{height: '100vh'}}>
	  <Content style={{ padding: '15px 50px'}}>
	    <Breadcrumb separator='/' style={{ margin: '16px 0' }}>
              <Breadcrumb.Item href='/'>Markdown</Breadcrumb.Item>
	    </Breadcrumb>
	    <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
	      <Component {...pageProps}/>
	    </div>
	  </Content>
	  <Footer style={{ textAlign: 'center' }}>
	    Amnesia ©2018 Created by Odditypark
	  </Footer>
	</Layout>
      </main>
    )
  }
}

export default Amnesia;
