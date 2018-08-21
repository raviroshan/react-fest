// Packages
import React, { Component } from 'react';
// import getValue from 'object-getvalue';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
// import SearchPage from 'components/SearchPage/SearchPage';
// import CartPage from 'components/CartPage/CartPage';

// Styles
import './AppMain.scss';

const Loading = () => <p>Loading Component....</p>;

const LoadableSearchPage = Loadable({
  //   loader: () => import('./my-component'),
  loader: () => import('components/SearchPage/SearchPage' /* webpackChunkName: "searchPage" */),
  loading: Loading
});

const LoadableCartPage = Loadable({
  //   loader: () => import('./my-component'),
  loader: () => import('components/CartPage/CartPage' /* webpackChunkName: "cartPage" */),
  loading: Loading
});

class AppMain extends Component {
  render() {
    return (
      <div className="AppMain">
        <Header />

        <main className="container">
          <Switch>
            <Route path="/" exact component={LoadableSearchPage} />
            <Route path="/search" exact component={LoadableSearchPage} />
            <Route path="/cart" exact render={props => <LoadableCartPage {...props} />} />
            <Redirect to="/" />
          </Switch>
        </main>

        <Footer />
      </div>
    );
  }
}

export default AppMain;
