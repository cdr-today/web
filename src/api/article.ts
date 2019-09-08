import axios from 'axios';
import cfg from './config';

const rGet = async (url) => {
  let res = await fetch(cfg.base + url);
  return res.json()
}

class Article {
  static get_articles(author) {
    return rGet(`/articles/${author}`)
  }

  static get_spec(id) {
    return rGet(`/article/${id}`)
  }
}

export default Article;
