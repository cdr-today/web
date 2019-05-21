import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Drawer, Button, Menu, Icon } from 'antd';

const drawerItems = [{
  name: '',
  icon: 'smile'
}, {
  name: 'lark',
  icon: 'twitter'
}, {
  name: 'message',
  icon: 'message'
}, {
  name: 'edit',
  icon: 'edit'
}, {
  name: 'user',
  icon: 'user'
}, {
  name: 'setting',
  icon: 'setting'
}]

const OkDrawer = props => (
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
      {drawerItems.map(e => (
	<Menu.Item key={e.name}>
	  <Link href={`/${e.name}`}><Icon type={e.icon}/></Link>
	</Menu.Item>	
      ))}
    </Menu>
  </Drawer>
);

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
