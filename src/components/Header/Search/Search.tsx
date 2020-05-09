import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  loadDwarves,
  searchDwarvesByName,
} from '../../../redux/actions/dwarvesActions';
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

interface SearchProps {
  searchDwarvesByName: (name: string) => void;
}

const Search: React.FC<SearchProps> = ({searchDwarvesByName}) => {
  const classes = useStyles();

  const [name, setName] = useState<string>('');

  useEffect(() => {
    searchDwarvesByName(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setName(e.currentTarget.value);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    if (name.length === 0) setName(name);
  };

  const resetSearch = () => {
    setName('');
    const searchInputEl = document.getElementById(
      'inputSearch',
    ) as HTMLInputElement;
    searchInputEl.value = '';
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
      {name.length > 0 && <button onClick={resetSearch}>Reset search</button>}
    </div>
  );
};

const mapDispatchToProps = {
  searchDwarvesByName,
  loadDwarves,
};

export default connect(null, mapDispatchToProps)(Search);
