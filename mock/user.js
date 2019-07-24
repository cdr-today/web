const userData = {
  user: 'Anonymous',
  token: '73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049'
}

export default {
  'POST /user/register': {
    errMsg: 'ok',
    data: userData
  },
  'POST /user/login': {
    errMsg: 'ok',
    data: userData
  }
}
