import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './AppMain.scss';

const AppMain = () => {
  return (
    <div className="container">
      <Header />
     <h1> Tile component </h1>
      <Footer />
    </div>
  );
};

export default AppMain;
