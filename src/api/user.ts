import axios from 'axios';

const login = params => axios.post('/user/login');
const register = params => axios.post('/user/register');

export default {
  login,
  register
}
