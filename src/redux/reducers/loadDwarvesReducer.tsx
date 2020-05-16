import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Whatever you return from your reducer it becomes the new state
export default function loadDwarvesReducer(
  state = initialState.dwarves,
  action,
) {
  switch (action.type) {
    case types.LOAD_DWARVES_SUCCESS:
      return action.dwarves;
    default:
      return state;
  }
}
