import {combineReducers} from 'redux';
import dwarves from './dwarvesReducer';
import searchedDwarves from './searchDwarvesReducer';
import apiCallsInProgress from './apiStatusReducer';
import isFilterOn from './toggleFilterReducer';
import filterParameters from './filterParametersReducer';
import defaultFilterParameters from './defaultFilterParametersReducer';
import searchedName from './searchedNameReducer';

const rootReducer = combineReducers({
  dwarves,
  searchedDwarves,
  apiCallsInProgress,
  isFilterOn,
  filterParameters,
  defaultFilterParameters,
  searchedName,
});

export default rootReducer;
