import {combineReducers} from 'redux';
import dwarves from './dwarvesReducer';
import searchedDwarfName from './searchDwarvesReducer';
import apiCallsInProgress from './apiStatusReducer';
import isFilterOn from './toggleFilterReducer';
import filterParameters from './filterParametersReducer';

const rootReducer = combineReducers({
  dwarves,
  searchedDwarfName,
  apiCallsInProgress,
  isFilterOn,
  filterParameters,
});

export default rootReducer;
