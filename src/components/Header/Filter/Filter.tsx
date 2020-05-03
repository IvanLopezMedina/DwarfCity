import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FilterList from '@material-ui/icons/FilterList';

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
  }),
);

const Filter = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.sectionDesktop}>
        <IconButton color="inherit">
          <FilterList />
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton color="inherit">
          <FilterList />
        </IconButton>
      </div>
    </>
  );
};

export default Filter;
