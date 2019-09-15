import React from 'react';
import { Divider, Typography, Icon, Popover, Modal, message } from 'antd';
import router from 'umi/router';
import { connect } from 'dva';
import api from '@/api/article';
import ss from '@/styles/article_thum.less';

const { Title } = Typography;
const article = node => {
  router.push(`/post?id=${node.id}`);
}

const ArticleThum = props => (
  <div>
    <Title level={3} onClick={() => article(props)} className={ss.title}>{props.title}</Title>
    <div>{props.date}</div>
    <Divider />
  </div>
);

export default ArticleThum;
