import React from 'react';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import { Button, Icon, Popover, Divider } from 'antd';

const styles = {
  button: {
    position: 'fixed',
    right: 64,
    bottom: 256,
    height: 48,
    width: 48,
    opacity: '0.6',
    boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.6)',
    zIndex: '9999'
  },
  icon: {
    fontSize: '1.5rem'
  },
  option: {
    fontSize: '1.2rem'
  },
  divider: {
    margin: '8px 0',
  }
}

const DragArea = props => (
  <Draggable onDrag={() => props.upProps.helperToggle(false)}>
    <Button
      style={styles.button}
      onClick={() => props.upProps.helperToggle(!props.upProps.visible)}
      type='primary' shape='circle'
    >
      <Icon style={styles.icon} type="experiment" />
    </Button>
  </Draggable>
)

const Helper = props => (
  <Popover
    content={
      <div>
	<Button type='link' icon='file-markdown' style={styles.option} />
	<Divider style={styles.divider} />
	<Button type='link' icon='menu' style={styles.option}
	onClick={() => props.drawerToggle(true)}
	/>
      </div>
    }
    trigger='click'
    visible={props.visible}
    onVisibleChange={props.helperToggle}
  >
    <DragArea upProps={props} />
  </Popover>
);

/* reducer */
const actions = require(
  '../../reducers/app'
).actions;

const mapStateToProps = state => ({
  ...state.app.helper
})

const mapDispatchToProps = dispatch => ({
  drawerToggle: visible => dispatch(
    actions.drawerVisible(visible)
  ),
  helperToggle: visible => dispatch(
    actions.helperVisible(visible)
  )
})

/* exports */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Helper);
