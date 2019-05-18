import React from 'react';
import App from 'next/app';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.less';
import '../assets/styles/_app.less';
import Link from 'next/link';

const { Sider, Header, Content, Footer } = Layout;

const styles = {
  layout: {
    height: '100vh'
  },
  header: {
    background: '#fff',
    padding: 0,
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)'    
  },
  content: {
    padding: '3rem',
    background: '#fff',
    height: '100%',
  }  
}

class Amnesia extends App {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout style={styles.layout} hasSider={true}>
        <Sider
	  theme='light' trigger={null}
	  collapsed={this.state.collapsed}
	  width='88'
	  collapsedWidth={0}
	>
          <Menu className='menu' theme='light' defaultSelectedKeys={['1']}>
	    <Menu.Item key="smile">
	      <Link href='/'><Icon type="smile" rotate={180}/></Link>
	    </Menu.Item>
	    <Menu.Item key="message">
	      <Link href='/message'><Icon type="message" /></Link>
	    </Menu.Item>
	    <Menu.Item key="edit">
	      <Link href='/edit'><Icon type="edit" /></Link>
	    </Menu.Item>
            <Menu.Item key="user">
	      <Link href='/user'><Icon type="user" /></Link>
	    </Menu.Item>
	    <Menu.Item key="setting">
	      <Link href='/setting'><Icon type="setting" /></Link>
	    </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={styles.header}>
            <Icon
	      className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={styles.content}>
	    {/*navigator*/}
	    <Component {...pageProps}/>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default Amnesia;
