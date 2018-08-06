// Packages
import React, { Component } from 'react';
// import getValue from 'object-getvalue';

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

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
          <h2>Main Component</h2>
          <p>Welcome, {userName}</p>

          <div>
            <button type="button" className="btn btn-outline-dark">
              <span>Dark</span>
              <i className="fas fa-star" />
            </button>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default AppMain;
