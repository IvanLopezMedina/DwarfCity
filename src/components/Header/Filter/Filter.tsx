import React, {useState} from 'react';
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

const Filter = () => {
  const classes = useStyles();
  const [toggleFilter, setToggleFilter] = useState(true);

  const toggleDrawer = (open: boolean) => (event: React.MouseEvent) => {
    setToggleFilter(open);
  };

  const list = () => (
    <>
      <div className={classes.list} role="presentation" onClick={toggleDrawer(false)}></div>

      <List>
        <Typography variant="h5" align="center">
          Filter dwarves
        </Typography>
        <ListItem>
          <Slider label={'Age'} range={[0, 400]} />
        </ListItem>
        <ListItem>
          <Slider label={'Height'} range={[0, 400]} />
        </ListItem>
        <ListItem>
          <Slider label={'Weight'} range={[0, 400]} />
        </ListItem>
        <ListItem>
          <Select label={'Hair color'} />
        </ListItem>
        <ListItem>
          <Select label={'Profession'} />
        </ListItem>
        <ListItem>
          <Button text={'Filter'} />
        </ListItem>
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

export default Filter;
