import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {getDwarvesByName} from '../../../redux/actions/searchDwarvesActions';
import {fade, makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '50ch',
      },
    },
  }),
);

const Search: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [name, setName] = useState<string>('');
  const prevNameRef: any = useRef();

  useEffect(() => {
    prevNameRef.current = name;
    // Checks if the search needs to be reset or done
    if (name && name.length > 0) {
      if (prevName && prevName.length > 0) {
        if (name.length < prevName.length) {
          //dispatch(searchDwarves(name, true, true));
          dispatch(getDwarvesByName(name, true, true));
        }
      }
      //dispatch(searchDwarves(name, false, true));
      dispatch(getDwarvesByName(name, true, true));
    } else if (name.length === 0) {
      //dispatch(searchDwarves(name, true, false));
      dispatch(getDwarvesByName(name, true, true));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);
  const prevName = prevNameRef.current;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setName(e.currentTarget.value);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    if (name.length === 0) setName(name);
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>

      <InputBase
        id="inputSearch"
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
        placeholder="Search by name…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{'aria-label': 'search'}}
      />
    </div>
  );
};

export default Search;
