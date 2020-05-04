import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.scss';

const HomePage: React.FC = () => {
  return (
    <>
      <div className="homepage">
        <h1>BRASTLEWARK</h1>
        <Link className="link-to-brastlewark" to="/Brastlewark">
          Enter the city
        </Link>
      </div>
    </>
  );
};

export default HomePage;
