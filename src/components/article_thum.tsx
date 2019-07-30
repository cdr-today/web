import React from 'react';
import { Divider, Typography, Icon, Popover, Modal, message } from 'antd';
import router from 'umi/router';
import api from '@/api/article';

import ss from '@/styles/article_thum.less';

const { Title } = Typography;
const article = node => {
  router.push(`/article?id=${node.id}`);
}

const editor = props => {
  router.push(`/editor?id=${props.id}`);
}

const del = props => {
  Modal.confirm({
    icon: null,
    title: '删除文章?',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      api.delete_article({id: props.id}).then(r => {
	if (r.data.errMsg === 'ok') {
	  message.success('删除成功');
	} else {
	  message.error('删除失败');
	}
      });
    }
  });
}

const Content = props => (
  <div>
    <a className={ss.item} onClick={() => editor(props.props)}>编辑</a>
    <br />
    <a className={ss.item} onClick={() => del(props.props)}>删除</a>
  </div>
);

const ArticleThum = props => (
  <div>
    <Title level={3} onClick={() => article(props)} className={ss.title}>{props.title}</Title>
    <div>id: {props.id}</div>
    <Divider orientation="right">
      <Popover placement='bottom' trigger="click" content={<Content props={props} />}>
	<Icon type="down" />
      </Popover>
    </Divider>
  </div>
);

export default ArticleThum;
