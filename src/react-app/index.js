import React from 'react';
import ReactDOM from 'react-dom';

import './dependencies';

import AppMain from 'components/AppMain/AppMain';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import searchReducer from './reducers/searchReducer';
import favProductsReducer from './reducers/favProductsReducer';

// const store = createStore(prouductListReducer);
const store = createStore(
  combineReducers({ search: searchReducer, favProducts: favProductsReducer }),
  applyMiddleware(logger)
);

console.log('store: ', store);
console.log('store: ', store.getState());

const el = document.getElementById('app-root');
ReactDOM.render(
  <Provider store={store}>
    <AppMain company="Deloitte" />
  </Provider>,
  el
);
