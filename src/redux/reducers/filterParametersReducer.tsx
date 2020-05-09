import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Whatever you return from your reducer it becomes the new state
export default function filterParameters(
  state = initialState.filterParameters,
  action,
) {
  switch (action.type) {
    case types.SAVE_FILTER_PARAMETERS:
      return action.params;
    default:
      return state;
  }
}
