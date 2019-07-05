import s from 'store';
import router from 'umi/router';
import styles from '@/styles/login.css';
import { Input, Typography } from 'antd';

const { Search } = Input;
const { Title } = Typography;

function verify(e) {
  s.set('author', e);
  router.push('/');
}

export default () => (
  <main className={styles.login}>
    <Title>Lark-in</Title>
    <Search
      placeholder="请输入您的名称"
      enterButton="进入"
      size="large"
      onSearch={e => verify(e)}
    />
  </main>
);
