import React, {useState} from 'react';
import {connect} from 'react-redux';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FilterList from '@material-ui/icons/FilterList';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Button from '../../common/Button';
import Select from '../../common/Select';
import Slider from '../../common/Slider';
import {Dwarf, State, FilterDwarves} from '../../../models';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    list: {
      width: 250,
    },
  }),
);

interface FilterProps {
  filterParameters: FilterDwarves;
}

const Filter: React.FC<FilterProps> = ({filterParameters}) => {
  const classes = useStyles();
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => () => {
    setToggleFilter(open);
  };

  const filterItems = [
    <Slider
      label={'Age'}
      range={[filterParameters.age.minAge, filterParameters.age.maxAge]}
    />,
    <Slider
      label={'Height'}
      range={[
        filterParameters.height.minHeight,
        filterParameters.height.maxHeight,
      ]}
    />,
    <Slider
      label={'Weight'}
      range={[
        filterParameters.weight.minWeight,
        filterParameters.weight.maxWeight,
      ]}
    />,
    <Select label={'Hair color'} selectData={filterParameters.hairColor} />,
    <Select label={'Profession'} selectData={filterParameters.professions} />,
    <Button text={'Filter'} />,
  ];

  const list: () => JSX.Element = () => (
    <>
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
      ></div>

      <List>
        <Typography variant="h5" align="center">
          Filter dwarves
        </Typography>
        {filterItems.map((filterItem, index) => (
          <ListItem key={index}>{filterItem}</ListItem>
        ))}
      </List>
    </>
  );

  return (
    <>
      <div className={classes.sectionDesktop}>
        <IconButton onClick={toggleDrawer(true)} color="inherit">
          <FilterList />
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton onClick={toggleDrawer(true)} color="inherit">
          <FilterList />
        </IconButton>
        {toggleFilter && (
          <Drawer
            anchor={'right'}
            open={toggleFilter}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        )}
      </div>
    </>
  );
};

const getMinAndMax: (
  currentMin: number,
  currentMax: number,
  value: number,
) => [number, number] = (currentMin, currentMax, value) => {
  if (value > currentMax) currentMax = value;
  if (value < currentMin) currentMin = value;

  return [currentMin, currentMax];
};

const mapStateToProps = (state: State) => {
  console.log(state.dwarves);
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

  state.dwarves.map((dwarf: Dwarf) => {
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

    dwarf.professions.map((profession) => {
      filterParameters.professions.add(profession);
      return null;
    });

    return null;
  });

  return {
    filterParameters,
  };
};

export default connect(mapStateToProps, null)(Filter);
