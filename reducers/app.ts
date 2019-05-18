// actions
const actions = {
  drawerVisible: visible => ({
    type: 'DRAWER_VISIABLE',
    visible
  })
}

// reducers
const reducers = (state = {}, action) => {
  state = {
    drawer: {
      visible: false
    }
  }

  switch (action.type) {
    case 'DRAWER_VISIABLE':
      state.drawer.visible = action.visible;
      return state;
    default:
      return state
  }
}

module.exports = {
  actions,
  reducers
}
