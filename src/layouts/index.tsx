import React from 'react';
import { connect } from 'dva';
import ss from './index.less';
import { Row, Col, Menu, Layout, Typography } from 'antd';
import Login from '@/components/login';

const { SubMenu } = Menu;
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const BasicLayout = props => {
  const { dispatch, user } = props;

  function h() {
    alert('hello');
  }

  function t() {
    alert('Trish!');
  }
  
  return (
    <Layout className={ss.normal}>
      <Header className={ss.header}>
	<Row type='flex' className={ss.header_row}>
	  <Col className={ss.header_title} span={12}>
	    <p>Lark-in</p>
	  </Col>
	  <Col className={ss.header_right} span={12}>
	    <a onClick={h}>登录</a>
	    <a onClick={t}>注册</a>
	  </Col>
	</Row>
	<section>
	  <Login />
	</section>
      </Header>
      <Content className={ss.content}>{props.children}</Content>
    </Layout>
  );
};

export default connect(({ user }) => ({
  user
}))(BasicLayout);
