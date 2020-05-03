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

const Filter = ({maxAge, maxWeight, maxHeight, hairColor, professions}) => {
  const classes = useStyles();
  const [toggleFilter, setToggleFilter] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.MouseEvent) => {
    setToggleFilter(open);
  };

  const filterItems = [
    <Slider label={'Age'} range={[0, maxAge]} />,
    <Slider label={'Height'} range={[0, maxHeight]} />,
    <Slider label={'Weight'} range={[0, maxWeight]} />,
    <Select label={'Hair color'} selectData={hairColor} />,
    <Select label={'Profession'} selectData={professions} />,
    <Button text={'Filter'} />,
  ];

  const list = () => (
    <>
      <div className={classes.list} role="presentation" onClick={toggleDrawer(false)}></div>

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
          <Drawer anchor={'right'} open={toggleFilter} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  let maxAge = 0;
  let maxHeight = 0;
  let maxWeight = 0;
  let hairColor: any = new Set();
  let professions: any = new Set();

  state.dwarves.map((dwarf) => {
    if (dwarf.age > maxAge) maxAge = dwarf.age;
    if (dwarf.height > maxHeight) maxHeight = dwarf.height;
    if (dwarf.weight > maxWeight) maxWeight = dwarf.weight;

    hairColor.add(dwarf.hair_color);

    dwarf.professions.map((profession) => {
      professions.add(profession);
      return null;
    });
    return null;
  });

  hairColor = [...hairColor];
  professions = [...professions];

  maxAge = Math.round(maxAge);
  maxHeight = Math.round(maxHeight);
  maxWeight = Math.round(maxWeight);

  return {
    maxAge,
    maxHeight,
    maxWeight,
    hairColor,
    professions,
  };
};

export default connect(mapStateToProps, null)(Filter);
