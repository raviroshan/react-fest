import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import AppMain from './components/AppMain/AppMain';

const Routes = (props) => (
  <HashRouter basename="/">
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={Login}
        />
        <Route
          exact
          path="/landing"
          component={AppMain}
        />
        <Redirect to={{ pathname: '/',
          state: {} }}
        />
      </Switch>
    </div>
  </HashRouter>
);

export default Routes;
