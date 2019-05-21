import Article from '../components/article';

const mock = [{
  cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  title: 'Europe Street beat',
  desc: 'www.instagram.com'
}];

const ss = {
  iframe: {
    height: '80vh',
    width: '100%'
  }
}

export default () => (
  <div>
    {mock.map(e => (
      <Article.Item
	key={e.title}
	cover={e.cover}
	title={e.title}
	desc={e.desc}
      />
    ))}
  </div>
);
