import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Whatever you return from your reducer it becomes the new state
export default function dwarvesReducer(state = initialState.searchedDwarfName, action) {
  switch (action.type) {
    case types.SEARCH_DWARVES_BY_NAME:
      return action.name;
    default:
      return state;
  }
}
