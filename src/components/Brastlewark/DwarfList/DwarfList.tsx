import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {loadDwarves} from '../../../redux/actions/dwarvesActions';
import InfiniteScroll from 'react-infinite-scroller';
import Spinner from '../../common/Spinner';
import DwarfItem from '../DwarfItem/DwarfItem';
import './DwarfList.scss';

const DwarfList = ({dwarves, loadDwarves, loading, searchedDwarfName}) => {
  const [page, setPage] = useState(10);
  const [displayedDwarfs, setdisplayedDwarfs] = useState([]);

  const resetdisplayedDwarfs = () => {
    // If dwarves reloads reset pagination and loaded dwarves
    setPage(10);
    setdisplayedDwarfs(dwarves.slice(0, page - 1));
  };

  const filterDwarvesByName = (dwarvesArray: any) => {
    return dwarvesArray.filter((dwarf: any) => dwarf.name.includes(searchedDwarfName));
  };

  useEffect(() => {
    resetdisplayedDwarfs();
    if (dwarves.length === 0) {
      loadDwarves().catch((error) => {
        alert('Loading dwarves failed' + error);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dwarves]);

  useEffect(() => {
    setdisplayedDwarfs(filterDwarvesByName(dwarves));
    if (searchedDwarfName.length === 0) {
      resetdisplayedDwarfs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedDwarfName]);

  const appendDwarves = () => {
    const PAGINATION = 10;
    const dwarvesSliced = dwarves.slice(page, page + PAGINATION);
    const newDwarvesArray: any = [...displayedDwarfs, ...dwarvesSliced];

    setdisplayedDwarfs(newDwarvesArray);
    setPage(page + PAGINATION);
  };

  const dwarfList = () => {
    if (displayedDwarfs && displayedDwarfs.length > 0) {
      return (
        <InfiniteScroll
          className="dwarf-list"
          loadMore={appendDwarves}
          hasMore={dwarves.length > displayedDwarfs.length && searchedDwarfName.length === 0}
        >
          {displayedDwarfs.map((dwarf) => (
            <DwarfItem key={dwarf['id']} dwarf={dwarf} />
          ))}
        </InfiniteScroll>
      );
    }
  };

  return (
    <>
      {loading && <Spinner />}
      {dwarfList()}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dwarves: state.dwarves,
    searchedDwarfName: state.searchedDwarfName,
    loading: state.apiCallsInProgress > 0,
  };
};

const mapDispatchToProps = {
  loadDwarves,
};

export default connect(mapStateToProps, mapDispatchToProps)(DwarfList);
