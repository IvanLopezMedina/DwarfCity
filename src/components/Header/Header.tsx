import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Search from './Search/Search';
import Filter from './Filter/Filter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },

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
  }),
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Brastlewark
          </Typography>
          <div className={classes.grow} />
          <Search />
          <div className={classes.grow} />
          <Filter />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
