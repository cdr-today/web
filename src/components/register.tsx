import React from 'react';
import { connect } from 'dva';
import { sha3_256 } from 'js-sha3';
import { message, Button, Input, Modal } from 'antd';

import ss from '@/styles/login.less';
import userAPI from '@/api/user';

const Register = props => {
  const { dispatch, modal, register } = props;
  const onChange = e =>  dispatch({
    type: `register/${e.target.id}`,
    payload: e.target.value
  });
  
  const hideModal = () => dispatch({
    type: 'modal/register',
    payload: false
  });

  function onOk() {
    let keys = Object.keys(register);
    for (let i in keys) {
      if (register[keys[i]] === '') {
	message.warning('请填写您的账号密码');
	return;
      }
    }
    if (register.password === register.password_r) {
      let _register = JSON.parse(JSON.stringify(register));
      _register.password = sha3_256(register.password);
      
      userAPI.register(_register).then(r => {
	if (r.data.errMsg === 'ok') {
	  message.success('注册成功')
	  dispatch({ type: 'register/clear', payload: null });
	  hideModal();
	} else {
	  message.error('用户名已注册')
	}
      })
    } else {
      message.error('前后密码不一致')
    }
  }

    return (
      <Modal title="注册" visible={modal.register} okText="注册" cancelText="取消" onOk={onOk} onCancel={hideModal}>
	<Input id='username' className={ss.input} placeholder="用户名" value={register.username} onChange={onChange}/>
	<Input.Password id='password' className={ss.input} placeholder="密码" value={register.password} onChange={onChange}/>
	<Input.Password id='password_r' className={ss.input} placeholder="密码" value={register.password_r} onChange={onChange}/>
      </Modal>
    );
}

export default connect(({ modal, register }) => ({
  modal, register
}))(Register);
