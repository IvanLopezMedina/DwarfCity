import * as types from '../actions/actionTypes';
import initialState from './initialState';

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
      const filtered = state.filter((dwarf: any) => {
        if (
          dwarf.age > action.params.age[0] &&
          dwarf.age < action.params.age[1] &&
          dwarf.weight > action.params.weight[0] &&
          dwarf.weight < action.params.weight[1] &&
          dwarf.height > action.params.height[0] &&
          dwarf.height < action.params.height[1]
        ) {
          if (action.params['hair color'] !== '') {
            if (dwarf.hair_color === action.params['hair color']) {
              if (action.params.profession === '') return true;
              else {
                if (dwarf.professions.includes(action.params.profession))
                  return true;
              }
            }
          } else {
            if (action.params.profession !== '') {
              if (dwarf.professions.includes(action.params.profession))
                return true;
            } else return true;
          }
        }

        return false;
      });
      return filtered;
    default:
      return state;
  }
}
