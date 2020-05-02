import {combineReducers} from 'redux';
import dwarves from './dwarvesReducer';
import searchedDwarfName from './searchDwarvesReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
  dwarves,
  searchedDwarfName,
  apiCallsInProgress,
});

export default rootReducer;
