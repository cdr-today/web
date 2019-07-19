import React from 'react';
import { connect } from 'dva';
import ss from '@/styles/login.less';

import { Modal, Button, Input, Menu, Icon, Dropdown } from 'antd';

const Login = props => {
  const { user, dispatch } = props;
  async function hideModel() {
    await dispatch({ type: 'user/login', payload: false });
  }

  return (
    <Modal
      title='Lark-in'
      visible={user.login}
      onOk={hideModel}
      onCancel={hideModel}
      okText="登录"
      cancelText="取消"
    >
      <Input className={ss.input} placeholder="用户名" />
      <Input.Password className={ss.input} placeholder="密码" />
    </Modal>
  );
}

export default connect(({ user }) => ({
  user,
}))(Login);
