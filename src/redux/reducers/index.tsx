import {combineReducers} from 'redux';
import dwarves from './dwarvesReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
  dwarves,
  apiCallsInProgress,
});

export default rootReducer;
