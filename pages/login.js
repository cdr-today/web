import Client from '../../sdk';
import { Input, Typography } from 'antd';
// import '../styles/login.less';

const { Search } = Input;
const { Title } = Typography;


function verify(e) {
  console.log(Client.verify())
}

export default () => (
  <main className='login'>
    <Title>Lark-in</Title>
    <Search
      placeholder="请输入您的名称"
      enterButton="进入"
      size="large"
      onSearch={verify}
    />
  </main>
);
