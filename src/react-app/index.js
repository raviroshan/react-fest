import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';

import { Provider } from 'react-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux';

import './dependencies';

// import AppMain from 'components/AppMain/AppMain';

import App from './app';

import searchPageReducer from './reducers/searchPageReducer';
import cartPageReducer from './reducers/cartPageReducer';

const store = createStore(
  combineReducers({ searchPageReducer, cartPageReducer }),
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const el = document.getElementById('app-root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  el
);
