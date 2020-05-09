import {combineReducers} from 'redux';
import dwarves from './dwarvesReducer';
import searchedDwarves from './searchDwarvesReducer';
import apiCallsInProgress from './apiStatusReducer';
import isFilterOn from './toggleFilterReducer';
import filterParameters from './filterParametersReducer';
import searchedName from './searchedNameReducer';

const rootReducer = combineReducers({
  dwarves,
  searchedDwarves,
  apiCallsInProgress,
  isFilterOn,
  filterParameters,
  searchedName,
});

export default rootReducer;
