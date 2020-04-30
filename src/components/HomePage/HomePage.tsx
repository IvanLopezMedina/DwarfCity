import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>This is a homepage</h1>
      <Link to="/Brastlewark">Go to Brastlewark</Link>
    </>
  );
};

export default HomePage;
