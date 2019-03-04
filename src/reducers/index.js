import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import displayReducer from './displayReducer';

export default combineReducers({
  apiData: apiReducer,
  displaySettings: displayReducer
});
