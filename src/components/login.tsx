import React from 'react';
import { connect } from 'dva';
import { message, Modal, Button, Input } from 'antd';

import ss from '@/styles/login.less';
import userAPI from '@/api/user';

const Login = props => {

  const { dispatch, modal, login } = props;

  const onChange = e => dispatch({
    type: `login/${e.target.id}`,
    payload: e.target.value
  });

  const hideModal = () => dispatch({
    type: 'modal/login',
    payload: false
  });

  function onOk() {
    let keys = Object.keys(login);
    for (let i in keys) {
      if (login[keys[i]] === '') {
	message.warning('请填写您的账号密码');
	return;
      }
    }

    userAPI.login(login).then(r => {
      if (r.data.errMsg === 'ok') {
	message.success('登录成功');
	dispatch({
	  type: 'login/clear',
	  payload: null
	});
	hideModal();
      }
    })
  }

  return (
    <Modal title='Lark-in' okText="登录" cancelText="取消" visible={modal.login} onOk={onOk} onCancel={hideModal}>
      <Input id='username' className={ss.input} placeholder="用户名" value={login.username} onChange={onChange}/>
      <Input.Password id='password' className={ss.input} placeholder="密码" value={login.password} onChange={onChange}/>
    </Modal>
  );
}

export default connect(({ modal, login }) => ({
  modal, login
}))(Login);
