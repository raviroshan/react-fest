import React from 'react';
import Header from '../Header/Header';
import './AppMain.scss';

const AppMain = () => {
  const welcomeMessage = 'Welcome to React fest';
  return (
    <div className="container">
      <Header />
      <div className="row">
        <h2>{welcomeMessage}</h2>
      </div>
    </div>
  );
};

export default AppMain;
