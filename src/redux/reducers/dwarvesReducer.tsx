import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Whatever you return from your reducer it becomes the new state
export default function dwarvesReducer(state = initialState.dwarves, action) {
  switch (action.type) {
    case types.LOAD_DWARVES_SUCCESS:
      return action.dwarves.Brastlewark;

    case types.SEARCH_DWARVES_BY_NAME_SUCCESS:
      return state.filter((dwarf: any) => dwarf.name.includes(action.name));
    default:
      return state;
  }
}
