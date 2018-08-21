// Packages
import React, { Component } from 'react';
// import getValue from 'object-getvalue';
import { Route, Switch, Redirect } from 'react-router-dom';

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SearchPage from 'components/SearchPage/SearchPage';
import CartPage from 'components/CartPage/CartPage';

// Styles
import './AppMain.scss';

class AppMain extends Component {
  render() {
    return (
      <div className="AppMain">
        <Header />

        <main className="container">
          <Switch>
            <Route path="/" exact component={SearchPage} />
            <Route path="/search" exact component={SearchPage} />
            <Route path="/cart" exact render={props => <CartPage {...props} />} />
            <Redirect to="/" />
          </Switch>
          {/* <SearchPage {...this.props} /> */}
        </main>

        <Footer />
      </div>
    );
  }
}

export default AppMain;
