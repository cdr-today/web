import React from 'react';
import { connect } from 'dva';
import ss from './index.less';
import { Row, Col, Menu, Layout, Popover, Divider } from 'antd';
import Login from '@/components/login';
import Register from '@/components/register';

const { Header, Footer, Sider, Content } = Layout;

const BasicLayout = props => {
  const { dispatch, modal, stat } = props;

  const login = () => dispatch({ type: 'modal/login', payload: true });
  const register = () => dispatch({ type: 'modal/register', payload: true });
  const profile = () => console.log('hello');

  const List = (
    <div>
      <a>写文章</a>
      <br />
      <a>文章列表</a>
      <hr />
      <a>退出登录</a>
    </div>
  );
  
  const Profile = () => (
    <Popover content={List} title={stat.user.username} trigger="click">
      <a onClick={profile}>{stat.user.username}</a>
    </Popover>    
  );
  
  const Tools = () => (
    <div>
      <a onClick={login}>登录</a>
      <a onClick={register}>注册</a>
    </div>
  );
  
  return (
    <Layout className={ss.normal}>
      <Header className={ss.header}>
	<Row className={ss.header_row}>
	  <Col className={ss.header_title} span={12}>
	    <p>Lark-in</p>
	  </Col>
	  <Col className={ss.header_right} span={12}>
	    {stat.login? <Profile />: <Tools />}
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

export default connect(({ modal, stat }) => ({
  modal, stat
}))(BasicLayout);
