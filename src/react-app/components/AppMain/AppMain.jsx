// Packages
import React, { Component } from 'react';

import { connect } from 'react-redux';

// Components
import SearchPage from '../SearchPage/SearchPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

// Actions

// Styles
import './AppMain.scss';

class AppMain extends Component {
  searchedItem = (searchedItem) => {
    console.log(searchedItem);
  }

  render() {
    return (
      <div className="AppMain">
        <Header searchedItem={this.searchedItem} />

        <main className="container">
          <SearchPage {...this.props} />
        </main>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = store => store;

export default connect(mapStateToProps)(AppMain);
