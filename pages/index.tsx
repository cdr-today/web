import Article  from '../components/article';

const mock = [{
  cover: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  title: 'Europe Street beat',
  desc: 'www.instagram.com'
}]

export default () => (
  <div>
  <Article.Item
    cover={mock[0].cover}
    title={mock[0].title}
    desc={mock[0].desc}
  />
  <Article.Item
    cover={mock[0].cover}
    title={mock[0].title}
    desc={mock[0].desc}
  />
  </div>
);
