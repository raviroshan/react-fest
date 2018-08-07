// Packages
import React, { Component } from 'react';
// import getValue from 'object-getvalue';

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SearchPage from 'components/SearchPage/SearchPage';

// Actions

// Styles
import './AppMain.scss';

class AppMain extends Component {
  render() {
    const { userName } = this.props;
    return (
      <div className="AppMain">
        <Header />

        <main className="container">
          <p>Main Component</p>
          <p>Welcome, {userName}</p>

          <SearchPage />
        </main>

        <Footer />
      </div>
    );
  }
}

export default AppMain;
