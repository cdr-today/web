import React from 'react';
import ss from '@/styles/layout.less';
import { Row, Col, Layout } from 'antd';
import router from 'umi/router';
import article from '@/api/article';

const { Header, Footer, Sider, Content } = Layout;

export default (props) => {
  // router
  const home = () => router.push('/');

  // init
  let author = document.title;
  
  return (
    <Layout className={ss.normal}>
      <Header className={ss.header}>
	<Row className={ss.header_row}>
	  <Col className={ss.header_title} span={12}>
	    <div className={ss.header_title_text} onClick={home}>{author}</div>
	  </Col>
	</Row>
      </Header>
      <Content className={ss.content}>{props.children}</Content>
    </Layout>
  );
};
