import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;
const ss = {
  card: {
    margin: '2rem 0',
  }
}

export default (props) => {
  return (
    <Card
      style={ss.card}
      cover={<img src={props.cover} />}
    >
      <Meta title={props.title} description={props.desc} />
    </Card>
  )
}
