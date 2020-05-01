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

  const dwarvesList = () => {
    if (dwarves && dwarves.Brastlewark && dwarves.Brastlewark.length > 0) {
      return dwarves.Brastlewark.map((dwarf) => <p>{dwarf.name}</p>);
    }
  };

  return (
    <>
      <Header />
      <div>Brastlewark city main page!</div>
      {loading && <Spinner />}
      {dwarvesList()}
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
