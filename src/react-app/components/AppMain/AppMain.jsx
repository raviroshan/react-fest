import React from 'react';
import Header from '../Header/Header';
import Tile from '../Tile/Tile';
import './AppMain.scss';

const AppMain = () => {
  const welcomeMessage = 'Welcome to React fest';
  return (
    <div className="container">
      <Header />
      <div className="row">
        <h2>{welcomeMessage}</h2>
      </div>
      <Tile Title="React" Description="A JS Library from facebook"/>
    </div>
  );
};

export default AppMain;
