import React from 'react';
import './AppMain.scss';

const AppMain = () => {
  const welcomeMessage = 'Welcome to React fest';
  return (
    <div className="container">
      <main>
        <h2>{welcomeMessage}</h2>
      </main>
    </div>
  );
};

export default AppMain;
