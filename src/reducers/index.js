import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  comments: (state = []) => state
});

export default rootReducer;
