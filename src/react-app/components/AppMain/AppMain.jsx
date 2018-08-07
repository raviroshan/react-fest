import React from 'react';
import './AppMain.scss';

const AppMain = () => {
  const welcomeMessage = 'Welcome to React fest';
  return (
    <div className="container">
      <div className="row">
        <h2>{welcomeMessage}</h2>
      </div>
    </div>
  );
};

export default AppMain;
