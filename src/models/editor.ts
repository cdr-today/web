export default {
  state: {
    title: '',
    content: ''
  },
  reducers: {
    'title'(state, { payload: str }) {
      state.title = str;
      return state;
    },
    'content'(state, { payload: str }) {
      state.content = str;
      return state;
    }
  }
}
