import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Tile from '../Tile/Tile';
import './AppMain.scss';

const AppMain = () => {
  return (
    <div className="container">
      <Header />
      <Tile />
      <Footer />
    </div>
  );
};

export default AppMain;
