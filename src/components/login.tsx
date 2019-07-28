import React from 'react';
import store from 'store';
import axios from 'axios';
import { connect } from 'dva';
import { sha3_256 } from 'js-sha3';
import { message, Modal, Button, Input } from 'antd';

import ss from '@/styles/login.less';
import userAPI from '@/api/user';

const Login = props => {
  const { dispatch, modal, login } = props;
  const onChange = async e => dispatch({ type: `login/${e.target.id}`, payload: e.target.value });
  const hideModal = async () => dispatch({ type: 'modal/login', payload: false });

  function onOk() {
    let keys = Object.keys(login);
    for (let i in keys) {
      if (login[keys[i]] === '') {
	message.warning('请填写您的账号密码');
	return;
      }
    }

    let _login = JSON.parse(JSON.stringify(login));
    _login.password = sha3_256(login.password);
    
    userAPI.login(_login).then(async r => {
      if (r.data.errMsg === 'ok') {
	axios.defaults.headers.token = r.headers.token;
	let store_data = {
	  token: r.headers.token,
	  username: r.data.username
	};
	store.set('store_data', store_data);
	message.success('登录成功');
	await hideModal();
	await dispatch({ type: 'stat/login', payload: true });
	await dispatch({ type: 'login/clear', payload: null });
	await dispatch({ type: 'stat/user', payload: {
	  username: r.data.username
	}});
      } else {
	message.error('登录失败');
      }
    });
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
