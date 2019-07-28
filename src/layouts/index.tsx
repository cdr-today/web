import React from 'react';
import { connect } from 'dva';
import ss from '@/styles/layout.less';
import { message, Row, Col, Menu, Layout, Popover, Divider, Icon } from 'antd';

import store from 'store';
import router from 'umi/router';
import Login from '@/components/login';
import Register from '@/components/register';

import article from '@/api/article';

const { Header, Footer, Sider, Content } = Layout;

const BasicLayout = props => {
  const { dispatch, modal, stat, editor } = props;
  const path = props.location.pathname;

  // auth
  stat.login === false && path !== '/'? router.push('/'): '';

  let store_data = store.get('store_data');
  if ( store_data && store_data.token !== undefined ) {
    dispatch({ type: 'stat/login', payload: true });
  }

  // Modals
  const login = async () => await dispatch({ type: 'modal/login', payload: true });
  const register = async () => await dispatch({ type: 'modal/register', payload: true });

  // Popover
  const logout = async () => {
    await dispatch({ type: 'stat/login', payload: false });
    await store.clearAll();
  }

  // draft
  const draft = async () => {
    if (editor.title === '') {
      message.warning('请填写标题');
      return;
    } else if (editor.content === '') {
      message.warning('请填写文章内容');
      return;
    }

    let r = await article.draft(editor);
    if (r.data.errMsg && r.data.errMsg === 'ok') {
      await message.success('已保存为草稿', .5);
      router.push('/');
      await dispatch({ type: 'editor/clear', payload: null });
    } else {
      await message.error('保存草稿失败，请重新登录', .5);
      await logout();
    }
  }
  
  // publish
  const publish = async () => {
    if (editor.title === '') {
      message.warning('请填写标题');
      return;
    } else if (editor.content === '') {
      message.warning('请填写文章内容');
      return;
    }

    let r = await article.article(editor);
    
    if (r.data.errMsg && r.data.errMsg === 'ok') {
      await message.success('文章已发布', .5);
      router.push('/');
      await dispatch({ type: 'editor/clear', payload: null });
    } else {
      await message.error('文章发布失败', .5);
    }
  }

  // router
  const home = () => router.push('/');
  const toEditor = () => router.push('/editor');

  const userMenu = (
    <div className={ss.um}>
      <a onClick={toEditor}>写文章</a>
      <br />
      <a onClick={home}>文章列表</a>
      <hr />
      <a onClick={logout}>退出登录</a>
    </div>
  );

  const publishMenu = (
    <div className={ss.pm}>
      <a onClick={draft}>存为草稿</a>
      <br />
      <a onClick={publish}>发布文章</a>
    </div>
  );
  
  const Profile = () => (
    <div>
      <Popover content={publishMenu} trigger="click">
	{path === '/editor'? <Icon type="more" />: ''}
      </Popover>
      <Popover content={userMenu} trigger="click">
	<a>{stat.user.username}</a>
      </Popover>
    </div>
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
	    <div className={ss.header_title_text} onClick={home}>Lark-in</div>
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

export default connect(({ modal, stat, editor }) => ({
  modal, stat, editor
}))(BasicLayout);
