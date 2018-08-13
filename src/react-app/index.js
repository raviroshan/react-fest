import React from 'react';
import ReactDOM from 'react-dom';

import './dependencies';

import AppMain from 'components/AppMain/AppMain';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import prouductListReducer from './reducers/prouductListReducer';
import favProductsReducer from './reducers/favProductsReducer';

// const store = createStore(prouductListReducer);
const store = createStore(
  combineReducers({ productList: prouductListReducer, favProducts: favProductsReducer })
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
