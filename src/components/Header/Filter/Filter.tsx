import React, {useState, useEffect} from 'react';
import {useStyles} from './styles';
import {filterDwarves} from '../../../redux/actions/dwarvesActions';
import IconButton from '@material-ui/core/IconButton';
import FilterList from '@material-ui/icons/FilterList';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Button from '../../common/Button';
import Select from '../../common/Select';
import Slider from '../../common/Slider';
import {useSelector, useDispatch} from 'react-redux';
import {State, FilterDwarves} from '../../../models';

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const isFilterOn = useSelector((state: State) => state.isFilterOn);

  // TODO: Move filterParameters from mapStateToProps to useSelector
  const filterParameters: FilterDwarves = useSelector(
    (state: State) => state.defaultFilterParameters,
  );
  const classes = useStyles();
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => () => {
    setToggleFilter(open);
  };

  const [filterData, setFilterData] = useState<{}>({});

  // Loads default data for filters
  useEffect(() => {
    let filterNewData = {
      age: [filterParameters.age.minAge, filterParameters.age.maxAge],
      height: [
        filterParameters.height.minHeight,
        filterParameters.height.maxHeight,
      ],
      weight: [
        filterParameters.weight.minWeight,
        filterParameters.weight.maxWeight,
      ],
      'hair color': '',
      profession: '',
    };

    setFilterData(filterNewData);
  }, [filterParameters]);

  const handleSonChange: (data: [string, number[] | string]) => void = (
    data,
  ) => {
    let key = data[0];
    let value = data[1];
    setFilterData({...filterData, [key]: value});
  };

  const handleClick = () => {
    dispatch(filterDwarves(filterData));
    setToggleFilter(!toggleFilter);
  };

  const filterItems: JSX.Element[] = [
    <Slider
      handleSonChange={handleSonChange}
      label={'age'}
      range={[filterParameters.age.minAge, filterParameters.age.maxAge]}
    />,
    <Slider
      handleSonChange={handleSonChange}
      label={'height'}
      range={[
        filterParameters.height.minHeight,
        filterParameters.height.maxHeight,
      ]}
    />,
    <Slider
      handleSonChange={handleSonChange}
      label={'weight'}
      range={[
        filterParameters.weight.minWeight,
        filterParameters.weight.maxWeight,
      ]}
    />,
    <Select
      handleSonChange={handleSonChange}
      label={'hair color'}
      selectData={filterParameters.hairColor}
    />,
    <Select
      handleSonChange={handleSonChange}
      label={'profession'}
      selectData={filterParameters.professions}
    />,
    <Button text={'Filter'} handleOnClick={handleClick} />,
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
        {isFilterOn ? (
          <Button text={'Remove Filter'} handleOnClick={handleClick} />
        ) : (
          filterItems.map((filterItem, index) => (
            <ListItem key={index}>{filterItem}</ListItem>
          ))
        )}
      </List>
    </>
  );

  return (
    <>
      <div className={classes.sectionDesktop}>
        <IconButton
          onClick={toggleDrawer(true)}
          color={isFilterOn ? 'secondary' : 'inherit'}
        >
          <FilterList />
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          onClick={toggleDrawer(true)}
          color={isFilterOn ? 'secondary' : 'inherit'}
        >
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

export default Filter;
