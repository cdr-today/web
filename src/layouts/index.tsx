import React from 'react';
import { connect } from 'dva';
import ss from './index.less';
import { Row, Col, Menu, Layout, Typography } from 'antd';
import Login from '@/components/login';
import Register from '@/components/register';

const { SubMenu } = Menu;
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const BasicLayout = props => {
  const { dispatch, modal } = props;

  function login() {
    dispatch({
      type: 'modal/login',
      payload: true
    })
  }

  function register() {
    dispatch({
      type: 'modal/register',
      payload: true
    })
  }
  
  return (
    <Layout className={ss.normal}>
      <Header className={ss.header}>
	<Row type='flex' className={ss.header_row}>
	  <Col className={ss.header_title} span={12}>
	    <p>Lark-in</p>
	  </Col>
	  <Col className={ss.header_right} span={12}>
	    <a onClick={login}>登录</a>
	    <a onClick={register}>注册</a>
	  </Col>
	</Row>
	<section>
	  <Login />
	  <Register />
	</section>
      </Header>
      <Content className={ss.content}>{props.children}</Content>
    </Layout>
  );
};

export default connect(({ modal }) => ({
  modal
}))(BasicLayout);
