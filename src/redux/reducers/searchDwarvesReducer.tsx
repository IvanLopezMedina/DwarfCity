import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Whatever you return from your reducer it becomes the new state
export default function dwarvesReducer(
  state = initialState.searchedDwarfName,
  action,
) {
  switch (action.type) {
    case types.COPY_DWARVES:
      if (action.dwarves && action.dwarves.length > 0) return action.dwarves;
      return state;
    case types.SEARCH_DWARVES_BY_NAME:
      return state.filter((dwarf: any) => dwarf.name.includes(action.name));
    default:
      return state;
  }
}
