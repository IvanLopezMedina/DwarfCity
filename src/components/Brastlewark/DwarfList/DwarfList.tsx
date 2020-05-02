import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {loadDwarves} from '../../../redux/actions/dwarvesActions';
import InfiniteScroll from 'react-infinite-scroller';
import Spinner from '../../common/Spinner';
import DwarfItem from '../DwarfItem/DwarfItem';
import './DwarfList.scss';

const DwarfList = ({dwarves, loadDwarves, loading}) => {
  const [page, setPage] = useState(10);
  const [loadedDwarves, setLoadedDwarves] = useState([]);

  useEffect(() => {
    if (dwarves.length === 0) {
      loadDwarves().catch((error) => {
        alert('Loading dwarves failed' + error);
      });
    }
    // If dwarves reloads reset pagination and loaded dwarves
    setPage(10);
    setLoadedDwarves(dwarves.slice(0, page - 1));
  }, [dwarves]);

  const appendDwarves = () => {
    const PAGINATION = 10;
    const dwarvesSliced = dwarves.slice(page, page + PAGINATION);
    const newDwarvesArray: any = [...loadedDwarves, ...dwarvesSliced];

    setLoadedDwarves(newDwarvesArray);
    setPage(page + PAGINATION);
  };

  const dwarfList = () => {
    if (loadedDwarves && loadedDwarves.length > 0) {
      return (
        <InfiniteScroll
          className="dwarf-list"
          loadMore={appendDwarves}
          hasMore={dwarves.length > loadedDwarves.length}
        >
          {loadedDwarves.map((dwarf) => (
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
    loading: state.apiCallsInProgress > 0,
  };
};

const mapDispatchToProps = {
  loadDwarves,
};

export default connect(mapStateToProps, mapDispatchToProps)(DwarfList);
