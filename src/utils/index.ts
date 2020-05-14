import {FilterDwarves, Dwarf} from '../models/';

const getMinAndMax: (
  currentMin: number,
  currentMax: number,
  value: number,
) => [number, number] = (currentMin, currentMax, value) => {
  if (value > currentMax) currentMax = value;
  if (value < currentMin) currentMin = value;

  return [currentMin, currentMax];
};

export const getDefaultFilterParameters = (dwarves) => {
  const DEFAULT_MIN: number = 999;
  const DEFAULT_MAX: number = 0;

  var filterParameters: FilterDwarves = {
    age: {minAge: DEFAULT_MIN, maxAge: DEFAULT_MAX},
    height: {minHeight: DEFAULT_MIN, maxHeight: DEFAULT_MAX},
    weight: {minWeight: DEFAULT_MIN, maxWeight: DEFAULT_MAX},
    hairColor: new Set(),
    professions: new Set(),
  };

  let age = filterParameters.age;
  let weight = filterParameters.weight;
  let height = filterParameters.height;

  dwarves.forEach((dwarf: Dwarf) => {
    [age.minAge, age.maxAge] = getMinAndMax(age.minAge, age.maxAge, dwarf.age);
    [weight.minWeight, weight.maxWeight] = getMinAndMax(
      weight.minWeight,
      weight.maxWeight,
      dwarf.weight,
    );
    [height.minHeight, height.maxHeight] = getMinAndMax(
      height.minHeight,
      height.maxHeight,
      dwarf.height,
    );

    filterParameters.hairColor.add(dwarf.hair_color);

    dwarf.professions.forEach((profession) => {
      filterParameters.professions.add(profession);
    });
  });

  return filterParameters;
};

export const getFilteredDwarves = (state, params) => {
  var filtered = state
    .filter(
      (dwarf: any) => dwarf.age > params.age[0] && dwarf.age < params.age[1],
    )
    .filter(
      (dwarf: any) =>
        dwarf.weight > params.weight[0] && dwarf.weight < params.weight[1],
    )
    .filter(
      (dwarf: any) =>
        dwarf.height > params.height[0] && dwarf.height < params.height[1],
    )
    .filter((dwarf: any) => {
      if (params['hair color'] !== '') {
        if (dwarf.hair_color === params['hair color']) {
          if (params.profession === '') return true;
          else {
            if (dwarf.professions.includes(params.profession)) return true;
          }
        }
      } else {
        if (params.profession !== '') {
          if (dwarf.professions.includes(params.profession)) return true;
        } else return true;
      }
      return false;
    });

  return filtered;
};
