import React from 'react';
import { connect } from 'dva';

import { Modal, Button } from 'antd';

const Login = props => {
  const { user, dispatch } = props;

  function showModel() {
    dispatch({
      type: 'user/login',
      payload: true
    })
  }
  
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
      okText="确认"
      cancelText="取消"
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
