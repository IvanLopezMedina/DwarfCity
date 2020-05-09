import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Whatever you return from your reducer it becomes the new state
export default function dwarvesReducer(
  state = initialState.isFilterOn,
  action,
) {
  switch (action.type) {
    case types.TOGGLE_FILTER:
      return action.toggle;
    default:
      return state;
  }
}
