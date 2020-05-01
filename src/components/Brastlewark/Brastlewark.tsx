import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import Spinner from '../common/Spinner';
import {loadDwarves} from '../../redux/actions/dwarvesActions';

const Brastlewark = ({dwarves, loadDwarves, loading}) => {
  useEffect(() => {
    if (dwarves.length === 0) {
      loadDwarves().catch((error) => {
        alert('Loading dwarves failed' + error);
      });
    }
  });

  const handle = () => {
    debugger;
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <div>Brastlewark city main page!</div>
          <button onClick={handle}>dwarrfff</button>
          {JSON.stringify(dwarves)}
        </>
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Brastlewark);
