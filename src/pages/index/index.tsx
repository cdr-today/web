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
      <Row className={ss.top_row} type='flex'>
	<Col span={12}>
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
	  <TabPane className={ss.tp} tab="草稿" key="1">
	    无草稿...
	    <Divider />
	  </TabPane>
	  <TabPane className={ss.tp} tab="已发布" key="2">
	    未发布文章...
	    <Divider />
	  </TabPane>
	</Tabs>
      </Row>
    </section>
  );
}
