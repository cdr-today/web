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
  return (
    <Layout className={ss.normal}>
      <Header className={ss.header}>
	<Row type='flex' className={ss.header_row}>
	  <Col className={ss.header_title} span={12}>
	    <p>Lark-in</p>
	  </Col>
	  <Col className={ss.header_right} span={12}>
	    <p level={4}>hello</p>
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
