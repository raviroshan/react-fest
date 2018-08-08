import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './AppMain.scss';

const AppMain = () => {
  const welcomeMessage = 'Welcome to React fest';
  return (
    <div className="container">
      <Header />
      <h1> Tile Component </h1>
      <Footer />
    </div>
  );
};

export default AppMain;
