export interface Dwarf {
  name: string;
  age: number;
  friends: string[];
  height: number;
  id: number;
  weight: number;
  hair_color: string;
  professions: string[];
  thumbnail: string;
}

export interface State {
  dwarves: Dwarf[];
  apiCallsInProgress: number;
  searchedDwarfName: string;
  isFilterOn: boolean;
}

export interface FilterDwarves {
  age: {minAge: number; maxAge: number};
  height: {minHeight: number; maxHeight: number};
  weight: {minWeight: number; maxWeight: number};
  hairColor: Set<string>;
  professions: Set<string>;
}
