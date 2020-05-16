import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadDwarves} from '../../../redux/actions/dwarvesActions';
import InfiniteScroll from 'react-infinite-scroller';
import Spinner from '../../common/Spinner';
import DwarfItem from '../DwarfItem/DwarfItem';
import './DwarfList.scss';
import {State} from '../../../models';

const DwarfList = () => {
  const dispatch = useDispatch();
  const dwarves = useSelector((state: State) => state.dwarves);
  const loading = useSelector((state: State) => state.apiCallsInProgress > 0);
  const loadedDwarfs = useSelector((state: State) => state.searchedDwarves);

  const [page, setPage] = useState(10);
  const [displayedDwarfs, setdisplayedDwarfs] = useState([]);

  const resetdisplayedDwarfs = () => {
    // If dwarves reloads reset pagination and loaded dwarves
    setPage(10);
    setdisplayedDwarfs(loadedDwarfs.slice(0, page - 1));
  };

  useEffect(() => {
    resetdisplayedDwarfs();
    if (dwarves.length === 0) {
      dispatch(loadDwarves()).catch((error) => {
        alert('Loading dwarves failed' + error);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dwarves]);

  useEffect(() => {
    setdisplayedDwarfs(loadedDwarfs.slice(0, page));
    if (loadedDwarfs.length === 0) {
      resetdisplayedDwarfs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadedDwarfs]);

  const appendDwarves = () => {
    const PAGINATION = 10;
    const dwarvesSliced = loadedDwarfs.slice(page, page + PAGINATION);
    const newDwarvesArray: any = [...displayedDwarfs, ...dwarvesSliced];

    setdisplayedDwarfs(newDwarvesArray);
    setPage(page + PAGINATION);
  };

  const dwarfList = () => {
    if (displayedDwarfs && displayedDwarfs.length > 0) {
      return (
        <div className="dwarf-container">
          <InfiniteScroll
            className="dwarf-list"
            loadMore={appendDwarves}
            hasMore={loadedDwarfs.length > displayedDwarfs.length}
          >
            {displayedDwarfs.map((dwarf) => (
              <DwarfItem key={dwarf['id']} dwarf={dwarf} />
            ))}
          </InfiniteScroll>
        </div>
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

export default DwarfList;
