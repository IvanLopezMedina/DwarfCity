import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Whatever you return from your reducer it becomes the new state
export default function searchedNameReducer(
  state = initialState.searchedName,
  action,
) {
  switch (action.type) {
    case types.SAVE_SEARCHED_NAME:
      return action.name;
    default:
      return state;
  }
}
