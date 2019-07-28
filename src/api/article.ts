import axios from 'axios';

class Article {
  static draft(params) {
    return axios.post('/api/article/draft', params);
  }

  static get_draft(params) {
    return axios.get(`/api/article/draft?id=${params.id}`);
  }

  static get_draft_thums(params) {
    return axios.get('/api/article/draft_thums', params);
  }
  
  static article(params) {
    return axios.post('/api/article', params);
  }

  static get_article(params) {
    return axios.get(`/api/article?id=${params.id}`);
  }

  static get_article_thums(params) {
    return axios.get('/api/article_thums', params);
  }
}

export default Article;
