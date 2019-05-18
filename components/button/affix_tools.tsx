import React from 'react';
import { Button, Icon, Popover, Divider, Modal } from 'antd';

const styles = {
  button: {
    position: 'absolute',
    right: 48,
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

export default class AffixTools extends React.Component {
  state = {
    visible: false,
    modalVisible: false
  };

  showModal = () => {
    this.setState({
      visible: false,
      modalVisible: true,
    });
  };

  modalCancel = () => {
    this.setState({
      modalVisible: false
    })
  }
  
  handleVisibleChange = (visible) => {
    this.setState({ visible });
  };
  
  render() {
    return (
      <div>
	<Modal
	  style={styles.modal}
	  title={<Icon type='edit' />}
	  onCancel={this.modalCancel}
	  centered={true}
	  destroyOnClose={true}
	  footer={null}
	  visible={this.state.modalVisible}
	>
	  <textarea style={styles.textarea}></textarea>
	</Modal>
	<Popover
	  content={
	    <div>
	      <Button
		type='link' icon='edit' theme='twoTone'
		style={styles.option}
		onClick={this.showModal}
	      />
	      <Divider dashed={true} style={styles.divider} />
	      <Button type='link' icon='file-markdown' style={styles.option} />
	    </div>
	  }
	  trigger="click"
	  visible={this.state.visible}
	  onVisibleChange={this.handleVisibleChange}
	>
	  <Button
	    style={styles.button}
	    type='primary' shape='circle'>
	    <Icon style={styles.icon} type="experiment" />
	  </Button>
	</Popover>
      </div>
    );
  }
}
