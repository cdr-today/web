import React from 'react';
import router from 'umi/router';
import { connect } from 'dva';
import { Row, Col, Button, Tabs, Divider, Empty } from 'antd';

import ss from '@/styles/index.less';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Index = props => {
  const { dispatch, stat } = props;

  function u() {
    alert('unimplemented...');
  }
  
  function editor() {
    router.push('/editor');
  }
  
  return (
    <section className={ss.page}>
      <Row className={ss.top_row} type='flex'>
	<Col span={12}>
	  <p className={ss.title}>我的文章</p>
	</Col>
	<Col className={ss.tools} span={12}>
	  {stat.login === false?'':<Button className={ss.push_article} size='large' onClick={editor}>写文章</Button>}
	</Col>
      </Row>
      <Row>
	<Tabs defaultActiveKey="1" onChange={callback} tabBarGutter={0} animated={false}>
	  <TabPane className={ss.tp} tab="草稿" key="1">
	    <div className={ss.empty}>暂无草稿</div>
	    <Divider />
	  </TabPane>
	  <TabPane className={ss.tp} tab="已发布" key="2">
	    <div className={ss.empty}>暂无发布</div>
	    <Divider />
	  </TabPane>
	</Tabs>
      </Row>
    </section>
  );
}

export default connect(({ modal, login, stat }) => ({
  modal, login, stat
}))(Index);
