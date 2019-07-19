import React from 'react';
import { connect } from 'dva';

import { Modal, Button } from 'antd';

const Login = props => {
  const { user, dispatch } = props;

  function hideModel() {
    dispatch({
      type: 'user/login',
      payload: false
    })
  }
  
  return (
    <Modal
      title="Modal"
      visible={user.login}
      onOk={hideModel}
      okText="登录"
      cancelText="注册"
    >
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
    </Modal>
  );
}

export default connect(({ user }) => ({
  user,
}))(Login);
