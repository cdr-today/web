import axios from 'axios';

class Article {
  static article(params) {
    return axios.post('/api/article', params);
  }

  static get_article(query) {
    return axios.get(`/api/article?id=${query.id}`);
  }

  static update_article(params) {
    return axios.put('/api/article', params);
  }

  static delete_article(query) {
    return axios.delete(`/api/article?id=${query.id}`);
  }

  static get_article_thums(params) {
    return axios.get('/api/article_thums', params);
  }
}

export default Article;
