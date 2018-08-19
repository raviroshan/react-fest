// Packages
import React, { Component } from 'react';
// import getValue from 'object-getvalue';

import { connect } from 'react-redux';

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SearchPage from 'components/SearchPage/SearchPage';

// Styles
import './AppMain.scss';

class AppMain extends Component {
  render() {
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

const mapStateToProps = store => store;

export default connect(mapStateToProps)(AppMain);
// export default AppMain;
