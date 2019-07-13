import React from 'react';
import ss from '@/styles/index.less';
import { Row, Col, Button, Tabs, Divider } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function() {
  return (
    <section className={ss.page}>
      <Row type='flex'>
	<Col className={ss.top_col} span={12}>
	  <p className={ss.title}>我的文章</p>
	</Col>
	<Col className={ss.tools} span={12}>
	  <Button className={ss.pull_article} size='large'>引入文章</Button>
	  <Button className={ss.push_article} size='large'>写文章</Button>
	</Col>
      </Row>
      <Row>
	<Tabs
	  defaultActiveKey="1"
	  onChange={callback}
	  tabBarGutter={0}
	  animated={false}
	>
	  <TabPane className={ss.draft} tab="草稿" key="1">
	    草稿
	  </TabPane>
	  <TabPane tab="已发布" key="2">
	    已发布
	  </TabPane>
	</Tabs>
      </Row>
      <Divider />
    </section>
  );
}
