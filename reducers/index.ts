import { combineReducers } from 'redux'
import app from './app';

const appReducers = app.reducers;

export default combineReducers({
  app: appReducers
})
