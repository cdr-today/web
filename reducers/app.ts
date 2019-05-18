// actions
const actions = {
  drawerVisible: visible => ({
    type: 'DRAWER_VISIABLE',
    visible
  }),
  helperVisible: visible => ({
    type: 'HELPER_VISIABLE',
    visible
  })
}

// reducers
const reducers = (state = {}, action) => {
  state = {
    drawer: {
      visible: false
    },
    helper: {
      visible: false
    },
  }

  switch (action.type) {
    case 'DRAWER_VISIABLE':
      state.drawer.visible = action.visible;
      return state;
    case 'HELPER_VISIABLE':
      state.helper.visible = action.visible;
      return state;
    default:
      return state
  }
}

module.exports = {
  actions,
  reducers
}
