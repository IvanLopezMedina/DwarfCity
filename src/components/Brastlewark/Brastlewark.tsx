import React from 'react';
import Header from '../Header/Header';
import DwarfList from './DwarfList/DwarfList';
import Container from '@material-ui/core/Container';

const Brastlewark: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <DwarfList />
      </Container>
    </>
  );
};

export default Brastlewark;
