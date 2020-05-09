import {combineReducers} from 'redux';
import dwarves from './dwarvesReducer';
import searchedDwarfName from './searchDwarvesReducer';
import apiCallsInProgress from './apiStatusReducer';
import isFilterOn from './toggleFilterReducer';

const rootReducer = combineReducers({
  dwarves,
  searchedDwarfName,
  apiCallsInProgress,
  isFilterOn,
});

export default rootReducer;
