import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Whatever you return from your reducer it becomes the new state
export default function defaultFilterParameters(
  state = initialState.defaultFilterParameters,
  action,
) {
  switch (action.type) {
    case types.SAVE_DEFAULT_FILTER_PARAMETERS:
      console.log(action.params);
      return action.params;
    default:
      return state;
  }
}
