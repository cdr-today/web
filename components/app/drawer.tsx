import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Drawer, Button, Menu, Icon } from 'antd';

const OkDrawer = (props) => {
  return (
    <div>
      <Button type='primary' icon='edit' onClick={() => props.drawerToggle(true)} />
      <Drawer
	width={80}
        placement="left"
        closable={false}
        onClose={() => props.drawerToggle(false)}
        visible={props.visible}
      >
	<Menu
	  className='menu' theme='light'
	  defaultSelectedKeys={['smile']}
	>
	  <Menu.Item key="smile">
	    <Link href='/'><Icon type="smile" rotate={180}/></Link>
	  </Menu.Item>
	  <Menu.Item key="message">
	    <Link href='/message'><Icon type="message" /></Link>
	  </Menu.Item>
	  <Menu.Item key="edit">
	    <Link href='/edit'><Icon type="edit" /></Link>
	  </Menu.Item>
          <Menu.Item key="user">
	    <Link href='/user'><Icon type="user" /></Link>
	  </Menu.Item>
	  <Menu.Item key="setting">
	    <Link href='/setting'><Icon type="setting" /></Link>
	  </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
}

/* reducer */
const actions = require(
  '../../reducers/app'
).actions;

const mapStateToProps = state => ({
  ...state.app.drawer
})

const mapDispatchToProps = dispatch => ({
  drawerToggle: visible => dispatch(
    actions.drawerVisible(visible)
  )
})

/* exports */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OkDrawer);
