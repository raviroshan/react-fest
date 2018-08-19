import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';

import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import './dependencies';

import AppMain from 'components/AppMain/AppMain';

import searchPageReducer from './reducers/searchPageReducer';
import cartPageReducer from './reducers/cartPageReducer';

const store = createStore(
  combineReducers({ searchPageReducer, cartPageReducer }),
  applyMiddleware(logger)
);

const el = document.getElementById('app-root');
ReactDOM.render(
  <Provider store={store}>
    <AppMain day="Friday" />
  </Provider>,
  el
);
