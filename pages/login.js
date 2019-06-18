import s from 'store';
import router from 'umi/router';
import { Input, Typography } from 'antd';

const { Search } = Input;
const { Title } = Typography;

function verify(e) {
  s.set('author', e);
  window.c.author().then(r => {
    if (r.err_msg && r.err_msg.match(/WARNING_010/)) {
      alert('用户名已存在~');
      return;
    }

    router.push('/');
  });
}

export default () => (
  <main className='login'>
    <Title>Lark-in</Title>
    <Search
      placeholder="请输入您的名称"
      enterButton="进入"
      size="large"
      onSearch={e => verify(e)}
    />
  </main>
);
