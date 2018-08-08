import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound';

import './dependencies';

import AppMain from 'components/AppMain/AppMain';

const el = document.getElementById('app-root');

ReactDOM.render((
<BrowserRouter>
  <div>
      <Route exact path="/" component={AppMain} />
      <Route path="/pageNotFound" component={PageNotFound} />
  </div>
</BrowserRouter>
), el);
