import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Spinner from '../../common/Spinner';
import DwarfItem from '../DwarfItem/DwarfItem';
import {loadDwarves} from '../../../redux/actions/dwarvesActions';
import './DwarfList.scss';

const DwarfList = ({dwarves, loadDwarves, loading}) => {
  useEffect(() => {
    if (dwarves.length === 0) {
      loadDwarves().catch((error) => {
        alert('Loading dwarves failed' + error);
      });
    }
  });

  const dwarfList = () => {
    if (dwarves && dwarves.Brastlewark && dwarves.Brastlewark.length > 0) {
      return dwarves.Brastlewark.map((dwarf) => <DwarfItem dwarf={dwarf} />);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="dwarf-list">{dwarfList()}</div>
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
