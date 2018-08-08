import React from 'react';
import Header from '../Header/Header';
import './AppMain.scss';

const AppMain = () => {
  const welcomeMessage = 'Welcome to React fest';
  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default AppMain;
