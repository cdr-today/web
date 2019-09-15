import axios from 'axios';
import cfg from './config';

const rGet = async (url) => {
  let res = await fetch(cfg.base + url);
  return res.json()
}

class Article {
  static get_articles(author, page) {
    page == null? page = 0 : '';
    
    return rGet(`/x/${author}/p?p=${page}`);
  }

  static get_spec(id) {
    return rGet(`/p/${id}`)
  }
}

export default Article;
