// Packages
import React, { Component } from 'react';
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
    console.log('>>>> this.props : ', this.props);
    return (
      <div className="AppMain">
        <Header />

        <main className="container">
          <SearchPage />
        </main>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state: ', state);
  return state;
};
export default connect(mapStateToProps)(AppMain);
