import React, {useState} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FilterList from '@material-ui/icons/FilterList';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

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
      width: 350,
    },
  }),
);

const Filter = () => {
  const classes = useStyles();
  const [toggleFilter, setToggleFilter] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.MouseEvent) => {
    setToggleFilter(open);
  };

  const list = () => (
    <>
      <div className={classes.list} role="presentation" onClick={toggleDrawer(false)}></div>
      <List>
        <ListItem button key={'text'}>
          <ListItemIcon>{<InboxIcon />}</ListItemIcon>
          <ListItemText primary={'text'} />
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
