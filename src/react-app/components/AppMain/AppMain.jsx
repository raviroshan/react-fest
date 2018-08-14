// Packages
import React, { Component } from 'react';
// import getValue from 'object-getvalue';

import { connect } from 'react-redux';

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SearchPage from 'components/SearchPage/SearchPage';

// Actions

// Styles
import './AppMain.scss';

class AppMain extends Component {
  render() {
    console.log('AppMain - props : ', this.props);
    return (
      <div className="AppMain">
        <Header />

        <main className="container">
          <SearchPage {...this.props} />
        </main>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log('store: ', store);
  return store;
};

export default connect(mapStateToProps)(AppMain);
// export default AppMain;
