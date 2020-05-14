import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {getFilteredDwarves} from '../../utils';

// Whatever you return from your reducer it becomes the new state
export default function dwarvesReducer(
  state = initialState.searchedDwarves,
  action,
) {
  switch (action.type) {
    case types.COPY_DWARVES:
      if (action.dwarves && action.dwarves.length > 0) return action.dwarves;
      return state;
    case types.SEARCH_DWARVES_BY_NAME:
      return state.filter((dwarf: any) =>
        dwarf.name.toLowerCase().includes(action.name.toLowerCase()),
      );
    case types.FILTER_DWARVES:
      return getFilteredDwarves(state, action.params);
    default:
      return state;
  }
}
