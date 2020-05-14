const DEFAULT_MIN: number = 999;
const DEFAULT_MAX: number = 0;

export default {
  dwarves: [],
  searchedDwarves: [],
  apiCallsInProgress: 0,
  isFilterOn: false,
  filterParameters: {},
  defaultFilterParameters: {
    age: {minAge: DEFAULT_MIN, maxAge: DEFAULT_MAX},
    height: {minHeight: DEFAULT_MIN, maxHeight: DEFAULT_MAX},
    weight: {minWeight: DEFAULT_MIN, maxWeight: DEFAULT_MAX},
    hairColor: new Set(),
    professions: new Set(),
  },
  searchedName: '',
};
