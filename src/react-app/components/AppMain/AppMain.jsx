import React from 'react';
import Header from '../Header/Header';
import List from '../List/List';
import Footer from '../Footer/Footer';
import './AppMain.scss';

const AppMain = () => {
  return (
    <div className="container">
      <Header />
      <div className="row">
      </div>
      <List />
      <Footer />
    </div>
  );
};

export default AppMain;
